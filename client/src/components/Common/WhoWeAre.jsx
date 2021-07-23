import React from 'react';
 
class WhoWeAre extends React.Component {
    render(){
        return (
            <section className="who-we-are ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Who We <span>Are</span></h2>
                        <p>As mentioned earlier we are Innovators with Virtual approach being Creative and Simple
                      with Professional skills who are Passionate with Unique and Ahead Of Time methodologies  </p>
                    </div>
                    
                    <div className="row">

                    <div className="col-lg-4 col-md-6">
                    <div className="single-who-we-are">
                        <i className="fa fa-lightbulb-o"></i>
                        <h4>Innovators </h4>
                        <p>Budding in the field of technology wih innovative ideas</p>
                        <span>1</span>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                            <div className="single-who-we-are">
                                <i className="fa fa-scissors"></i>
                                <h4>Virtual</h4>
                                <p>combination of cloud resources to complete projects with elegance</p>
                                <span>2</span>
                            </div>
                        </div>

                            
                        <div className="col-lg-4 col-md-6">
                            <div className="single-who-we-are">
                                <i className="fa fa-tag"></i>
                                <h4>Creative & Simple</h4>
                                <p>Can find solutions for any problem with creativity & by keeping it simple</p>
                                <span>3</span>
                            </div>
                        </div>
                
                        <div className="col-lg-4 col-md-6">
                            <div className="single-who-we-are">
                                <i className="fa fa-users"></i>
                                <h4>Professional</h4>
                                <p>We do the things in highly systematic and classified way.</p>
                                <span>4</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-who-we-are">
                              <i className="fa fa-life-ring"></i>
                                <h4>Passionate</h4>
                                <p>We are quick learners & adopt change in a fast phase </p>
                                <span>5</span>
                            </div>
                        </div>
                        
                         <div className="col-lg-4 col-md-6">
                            <div className="single-who-we-are">
                                <i className="fa fa-linode"></i>
                                <h4>Unique & ahead of time</h4>
                                <p>The methodologies we follow are unequalled and inadvanced</p>
                                <span>6</span>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        );
    }
}
 
export default WhoWeAre;