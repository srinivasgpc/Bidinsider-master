import React from 'react';
import { Link } from 'react-router-dom';
 
class Welcome extends React.Component {
    render(){
        return (
            <section id="welcome" className="welcome-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h4>We are Innovative</h4>
                        <h2>Welcome to <span>TechPoT</span></h2>
                        <p>We are a budding Startup both virtual and traditional based company where we combine our inhouse and cloud resources
                        to solve the your needs in an complete new approach with latest techmologies  </p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <i className="fa fa-pencil-square-o icon"></i>
                                <h3>Creative Design</h3>
                                <p>We give a creative solution to  your needs and the challenges as a whole we arde
                                face as global citizens through the technologies</p>
{/*<Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>*/}
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <i className="fa fa-laptop icon"></i>
                                <h3>Friendly Codes</h3>
                                <p>The codes and the approach here are very simple user friendly that makes everyone 
                                to get a deep dive in to the projects</p>
                                <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-box">
                                <i className="fa fa-life-ring icon"></i>
                                <h3>Fast Support</h3>
                                <p>The support we provide here is of highly professional and with best quality resources
                                gives 24x7 support that can make every face to smile</p>
                                <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Welcome;