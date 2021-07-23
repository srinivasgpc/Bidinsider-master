const express = require("express");
const jwt = require("jsonwebtoken");
var router = express.Router();
var bcrypt = require("bcryptjs");
var PropertiesReader = require("properties-reader");
var properties = PropertiesReader("server.properties");
const nodemailer = require("nodemailer");
const logger = require("../../utils/logger");
const pool = require("../../utils/db-pool");
const formatJson = require("../../utils/json-formatter");
const nanoid = require("nanoid");

let transporter = nodemailer.createTransport({
  host: properties.get("mail.host"),
  port: properties.get("mail.port"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: properties.get("mail.user"), // generated ethereal user
    pass: properties.get("mail.password") // generated ethereal password
  }
});

router.post("/api/user/verify-login", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  let start = new Date();
  var sql =
    "select userid,fname,lname,mname,job_title,email,pwd, isadmin from public.users where email='" +
    req.body.username +
    "' and isactive=true and isdeleted<>true";
  logger.debug("QUERY: " + sql);
  pool.query(sql, (err, response) => {
    var json = formatJson(response);
    let isCorrectPassword = false;
    if (json != undefined && json.length > 0) {
      isCorrectPassword = bcrypt.compareSync(req.body.password, json[0].pwd);
      if (isCorrectPassword) {
        const token = jwt.sign(
          { email: req.body.username },
          properties.get("token.secret"),
          { expiresIn: "24h" }
        );
        json[0].token = token;
      }
      delete json[0].pwd;
    }
    let end = new Date();
    logger.debug(
      "Time taken for execution of verify login is " +
        Math.abs((end.getTime() - start.getTime()) / 1000)
    );
    if (err) {
      logger.error(sql + "==>" + err);
      res.send([
        {
          error: "Username not found"
        }
      ]);
    }
    if (isCorrectPassword) {
      res.send(json);
    } else {
      res.send([
        {
          error: "Incorrect Login or Password"
        }
      ]);
    }
  });
});

router.post("/api/user/verify-email", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  let start = new Date();
  var sql = "select * from public.users where email='" + req.body.email + "'";
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
});

router.post("/api/user/signup", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  let start = new Date();
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.pwd, salt);
  var sql =
    "INSERT INTO public.users(fname, lname, mname, pwd, job_title, c_name, c_url, city, p_number, email, isactive, isdeleted, createdate, lastmodifieddate)" +
    "VALUES ('" +
    req.body.fname +
    "','" +
    req.body.lname +
    "','" +
    req.body.mname +
    "','" +
    hash +
    "','" +
    req.body.jobTitle +
    "','" +
    req.body.companyName +
    "','" +
    req.body.companyUrl +
    "','" +
    req.body.city +
    "'," +
    req.body.phone +
    ",'" +
    req.body.email +
    "',true,false,'" +
    new Date().toISOString().split("T")[0] +
    "','" +
    new Date().toISOString().split("T")[0] +
    "')";
  logger.debug("QUERY: " + sql);
  pool.query(sql, async (err, response) => {
    var json = { status: 200 };
    let info = await transporter.sendMail({
      from: '"Bid Insider" <noreply@bid-insider.com>', // sender address
      to: req.body.email, // list of receivers
      bcc: "naveen@bidkinetics.com",
      subject: "Welcome to Bid Insider!",
      text:
        "Welcome to Bid Insider!\n\nYou have successfully created an account on our Bid Insider website. For any assistance, please feel free to contact us by using the “Contact Us” section on the Bid Insider website. We are always happy to hear from you.\n\nThank you.\nBid Insider Team.\nhttps://www.bid-insider.com/\n\nKindly note that this is a system generated email. Please do not reply"
    });
    let end = new Date();
    logger.debug(
      "Time taken for execution of signup is " +
        Math.abs((end.getTime() - start.getTime()) / 1000)
    );
    if (err) {
      logger.error(sql + "==>" + err);
    }
    res.send(json);
  });
});

router.post("/api/user/forgotPassword", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  let start = new Date();
  var sql = "select * from public.users where email='" + req.body.email + "'";
  logger.debug("QUERY: " + sql);
  pool.query(sql, (err, response) => {
    var json;
    if (response.rows.length > 0) {
      //send mail with defined transport object
      const token = nanoid(15);
      var update =
        "update public.users set pwd='" +
        token +
        "' where public.users.email='" +
        req.body.email +
        "'";
      pool.query(update, async (err, r) => {
        let info = await transporter.sendMail({
          from: '"Bid Insider" <noreply@bid-insider.com>', // sender address
          to: req.body.email, // list of receivers
          subject: "Bid Insider Password reset request",
          text:
            "You are receiving this email because you have requested to reset your Bid Insider website password. Please use the following link to reset your password.\n\n" +
            "'http://34.229.240.141:3000/reset/" +
            token +
            "'\n\n" +
            "Thank you.\nBid Insider Team.\nhttps://www.bid-insider.com/\n\nKindly note that this is a system generated email. Please do not reply"
        });
        res.send({
          status: 200,
          text: "We have sent you an email with a link to reset your password"
        });
      });
    } else {
      res.send({ status: 201, text: "We do not have an account with this email address in our system. Please Sign-Up to continue" });
    }
    let end = new Date();
    logger.debug(
      "Time taken for execution of verify login is " +
        Math.abs((end.getTime() - start.getTime()) / 1000)
    );
    if (err) {
      logger.error(sql + "==>" + err);
    }
  });
});

router.post("/api/user/resetPasswordToken", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  let start = new Date();
  var sql = "select * from public.users where pwd='" + req.body.token + "'";
  logger.debug("QUERY: " + sql);
  pool.query(sql, (err, response) => {
    var json=formatJson(response);
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.pwd, salt);
    if (response.rows.length > 0) {
      var update =
        "update public.users set pwd='" +
        hash +
        "' where public.users.pwd='" +
        req.body.token +
        "'";
      pool.query(update, async (err, r) => {
        let info = await transporter.sendMail({
          from: '"Bid Insider" <noreply@bid-insider.com>', // sender address
          to: json[0].email, // list of receivers
          subject: "Your Bid Insider Password was changed",
          text:
            "We are sending you this message to notify you that your password was changed on the Bid Insider website. Please contact us immediately using the Contact Us section on our website if you did not perform this action." +
            "\n\n" +
            "Thank you.\nBid Insider Team.\nhttps://www.bid-insider.com/\n\nKindly note that this is a system generated email. Please do not reply"
        });
        res.send({ status: 200, text: "Password updated successfully" });
      });
    } else {
      res.send({
        status: 201,
        text: "No token found, Please request another token."
      });
    }
    let end = new Date();
    logger.debug(
      "Time taken for execution of verify login is " +
        Math.abs((end.getTime() - start.getTime()) / 1000)
    );
    if (err) {
      logger.error(sql + "==>" + err);
    }
  });
});

router.post("/api/user/resetPasswordMail", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  let start = new Date();
  var sql = "select * from public.users where email='" + req.body.email + "'";
  logger.debug("QUERY: " + sql);
  pool.query(sql, (err, response) => {
    var json=formatJson(response);
    if (response.rows.length > 0) {
      let compare=bcrypt.compareSync(req.body.oldPass, json[0].pwd);
      if(compare){
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.pwd, salt);
        var update =
          "update public.users set pwd='" +
          hash +
          "' where public.users.email='" +
          req.body.email +
          "'";
        pool.query(update, async (err, r) => {
          let info = await transporter.sendMail({
            from: '"Bid Insider" <noreply@bid-insider.com>', // sender address
            to: req.body.email, // list of receivers
            subject: "Your Bid Insider Password was changed",
            text:
              "We are sending you this message to notify you that your password was changed on the Bid Insider website. Please contact us immediately using the Contact Us section on our website if you did not perform this action." +
              "\n\n" +
              "Thank you.\nBid Insider Team.\nhttps://www.bid-insider.com/\n\nKindly note that this is a system generated email. Please do not reply"
          });
          res.send({ status: 200, text: "Password updated successfully" });
        });
      }else {
        res.send({
          status: 201,
          text: "The current password you have entered is invalid. Kindly retry"
        });
      }
      
    } else {
      res.send({
        status: 201,
        text: "The current password you have entered is invalid. Kindly retry"
      });
    }
    let end = new Date();
    logger.debug(
      "Time taken for execution of verify login is " +
        Math.abs((end.getTime() - start.getTime()) / 1000)
    );
    if (err) {
      logger.error(sql + "==>" + err);
    }
  });
});

router.post("/api/user/contactMail", async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  let start = new Date();
  let info = await transporter.sendMail({
    from: '"Bid Insider" <noreply@bid-insider.com>', // sender address
    to: req.body.toEmail, // list of receivers
     subject:"New enquiry from Bid Insider – Contact Us",
     text:"The following message was sent from the Bid Insider website – Contact Us section.\n\n\n"+ req.body.body+"\n\nKindly note that this is a system generated email. Please do not reply"
  });
  let end = new Date();
  logger.debug(
    "Time taken for execution of verify login is " +
      Math.abs((end.getTime() - start.getTime()) / 1000)
  );

  res.send({ status: 200, text: "Thanks for reaching us." });
});

module.exports = router;
