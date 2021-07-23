const express = require("express");
var router = express.Router();
var randomstring = require("randomstring");
const nodemailer = require("nodemailer");
var PropertiesReader = require("properties-reader");

const logger = require("../../utils/logger");
const pool = require("../../utils/db-pool");
const checkToken = require("../../utils/token");
const s3 = require("../../utils/s3");
const formatJson = require("../../utils/json-formatter");
var properties = PropertiesReader("server.properties");

let transporter = nodemailer.createTransport({
  host: properties.get("mail.host"),
  port: properties.get("mail.port"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: properties.get("mail.user"), // generated ethereal user
    pass: properties.get("mail.password") // generated ethereal password
  }
});

router.get("/api/file/all", function(req, res) {
    res.setHeader("Content-Type", "application/json");
    let start = new Date();
    var sql ="select fileid,f_sol_number,f_set_aside_status,f_fac_clear,f_con_title,f_price, f_desc,f_weight,f_tstamp,lastmodifieddate from file where isactive=true and isdeleted=false";
    logger.debug("QUERY: " + sql);
    pool.query(sql, (err, response) => {
      var json = formatJson(response);
      let end = new Date();
      logger.debug(
        "Time taken for execution of verify login is " +
          Math.abs((end.getTime() - start.getTime()) / 1000)
      );
      if (err) {
        logger.error(sql + "==>" + err);
      }
      res.send(json);
    });
})
  
router.post('/api/file/create', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    let start = new Date();
   
 
    if(req.body) {
        var fileName = req.files.document.name;
        var fileBuffer = req.files.document.data;

        const params = {
            
            Bucket: 'bidkineticsv2',
            Key: fileName,
            Body: fileBuffer
        };
        
        s3.upload(params, function(err, data) {
            if (err) {
                throw err;
            } else {
                var sql ="INSERT INTO file(f_sol_number, f_set_aside_status, f_fac_clear, f_con_title, f_price, f_desc, f_weight, f_tstamp, isactive, isdeleted, createdate, lastmodifieddate, createdby, updatedby, f_url)"+
                        "VALUES ('"+ req.body.f_sol_number +"','" + req.body.f_set_aside_status + "','" + req.body.f_fac_clear +"','" + req.body.f_con_title + "'," +req.body.f_price+",'"
                        + req.body.f_desc + "'," + req.body.f_weight + ",'" + new Date().toISOString().split('T')[0] + "',true,false,'" +new Date().toISOString().split('T')[0]+"','"
                        + new Date().toISOString().split('T')[0]+"', 'ADMIN', 'ADMIN','"+ data.Location +"')";
                logger.debug("QUERY: " + sql);
                pool.query(sql, (err, response) => {
                var json = formatJson(response);
                let end = new Date();
                logger.debug(
                    "Time taken for execution of verify login is " +
                    Math.abs((end.getTime() - start.getTime()) / 1000)
                );
                if (err) {
                    logger.error(sql + "==>" + err);
                }
                res.send({'type':'success'});
                });
            }
        });
    }
});

router.post('/api/file/delete/:id', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    let start = new Date();
    var sql ="update file set isdeleted=true, deleted_at='"+ new Date().toISOString().split('T')[0]+"' where fileid=" + req.params.id ;
    logger.debug("QUERY: " + sql);
    pool.query(sql, (err, response) => {
        let end = new Date();
        logger.debug(
          "Time taken for execution of verify login is " +
            Math.abs((end.getTime() - start.getTime()) / 1000)
        );
        if (err) {
          logger.error(sql + "==>" + err);
          res.send({
            message: 'Error in deleting the file'
          });
        }
        res.send({
            message: 'Deleted successfully'
        });
    });
});


router.post('/api/file/addFileToUser', checkToken, function(req, res) {
  res.setHeader("Content-Type", "application/json");
  let start = new Date();

  var sql ="INSERT INTO userfiles(userid, fileid, isactive, isdeleted, createdate, lastmodifieddate, createdby, updatedby)"+
          "VALUES ('"+ req.body.userid +"','" + req.body.fileid + "',true,false,'" +new Date().toISOString().split('T')[0]+"','"
          + new Date().toISOString().split('T')[0]+"', 'ADMIN', 'ADMIN')";
  logger.debug("QUERY: " + sql);
  pool.query(sql, async (err, response) => {
      let end = new Date();
      logger.debug(
        "Time taken for execution of verify login is " +
          Math.abs((end.getTime() - start.getTime()) / 1000)
      );
      if (err) {
        logger.error(sql + "==>" + err);
        res.send({
          message: 'Error in adding the file'
        });
      }
      let info = await transporter.sendMail({
          from: '"Bid Insider" <noreply@bid-insider.com>', // sender address
          to: req.body.email, // list of receivers
          subject: "Bid Insider Order Confirmation",
          bcc: "naveen@bidkinetics.com",
          text:
            "Dear Contractor,\n\nThank you for placing order on Bid Insider. "+
             "Please feel free to reach out to us for any questions/concerns you may have, "+
              "we will be happy to assist you. For your reference, following is the document information that you have purchased. Please note that, if you have purchased more than one document, you will receive a separate email for each of the documents you have purchased.\n\nDocument:\n Solicitation Number:  "+req.body.f_sol_number+
               "\n Price:  $"+req.body.f_price+"\n\nVery Respectfully,\nBid Insider Team.\nhttps://www.bid-insider.com\n\nKindly note that this is a system generated email. Please do not reply"
      });
      res.send({
          message: 'File added to user successfully'
      });
  });
});

router.post("/api/file/getuserfiles",checkToken, function(req, res) {
  res.setHeader("Content-Type", "application/json");
  let start = new Date();
  var sql =`select fileid,f_sol_number,f_set_aside_status,f_fac_clear,f_con_title,f_price, f_desc,f_weight,f_tstamp,f_url,lastmodifieddate from file 
              where isactive=true and fileid in (select fileid from userfiles where userid=${req.body.userid})`;
  logger.debug("QUERY: " + sql);
  pool.query(sql, (err, response) => {
    var json = formatJson(response);
    let end = new Date();
    logger.debug(
      "Time taken for execution of verify login is " +
        Math.abs((end.getTime() - start.getTime()) / 1000)
    );
    if (err) {
      logger.error(sql + "==>" + err);
    }
    res.send(json);
  });
})

module.exports = router;