import React from 'react';
import { Link } from 'react-router-dom';
 
class Strategy extends React.Component {
    render(){
        return (
            <section className="strategy-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-5">
                            <div className="image"></div>
                        </div>
                        
                        <div className="col-lg-6 col-md-7">
                            <div className="about-strategy ptb-80">
                                <div className="section-title">
                                    {/*<h4>Highly Creative Solutions</h4>*/}
                                    <h2>About <span>Our Vision</span></h2>
                <p>we as a innovators have started the company which can unlease the capability of Internet Of Things to every 
sector of human for thier well being with latest technologies</p>
<p>We Love to implement the stides of digitizing of education healthcare goverence and other every need of the people
to reach every corner of the world </p>
<p>We provide a platform for the freelancers enterperneurs to showcase there innovative ideas and where the cilents
can find many resources who work as an epots for the company , we have the network of best minds to work for
every scenarios</p>

                                </div>
                                <h2>Our <span>Features</span></h2>
                                <ul>
                                    <li><i className="fa fa-check"></i>Highly Creative Designs</li>
                                    <li><i className="fa fa-check"></i>Market Ready</li>
                                    <li><i className="fa fa-check"></i>Cost Efficient Models</li>
                                    <li><i className="fa fa-check"></i>In Time Progress</li>
                                    <li><i className="fa fa-check"></i>Secured Approaches</li>
                                    <li><i className="fa fa-check"></i>Best Customer Support</li>
                                </ul>
                                
                             {/*  <Link to="#" className="btn btn-primary">Read More</Link>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Strategy;