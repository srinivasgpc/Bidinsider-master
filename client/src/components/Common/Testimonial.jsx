import React from 'react';
import clientImgOne from '../../assets/images/client-avatar1.jpg';
import clientImgTwo from '../../assets/images/client-avatar2.jpg';
import clientImgThree from '../../assets/images/client-avatar3.jpg';
 
class Testimonial extends React.Component {
    render(){
        return (
            <section className="testimonials-area ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Clients <span>Feedback</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feedback">
                                <div className="client-info">
                                    <div className="client-pic">
                                        <img src={clientImgOne} alt="client-avatar" />
                                    </div>

                                    <div className="client-title">
                                        <h4>James Anderson</h4>
                                        <h5>CEO of Facebook</h5>
                                    </div>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>

                                <span><i className="fa fa-quote-left"></i></span>
                            </div>
                        </div>
                            
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feedback">
                                <div className="client-info">
                                    <div className="client-pic">
                                        <img src={clientImgTwo} alt="client-avatar" />
                                    </div>

                                    <div className="client-title">
                                        <h4>Alex Smith</h4>
                                        <h5>CEO of Twitter</h5>
                                    </div>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>

                                <span><i className="fa fa-quote-right"></i></span>
                            </div>
                        </div>
                            
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feedback">
                                <div className="client-info">
                                    <div className="client-pic">
                                        <img src={clientImgThree} alt="client-avatar" />
                                    </div>

                                    <div className="client-title">
                                        <h4>Olivia Smith</h4>
                                        <h5>CEO of Envytheme</h5>
                                    </div>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>

                                <span><i className="fa fa-quote-left"></i></span>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feedback">
                                <div className="client-info">
                                    <div className="client-pic">
                                        <img src={clientImgOne} alt="client-avatar" />
                                    </div>

                                    <div className="client-title">
                                        <h4>James Anderson</h4>
                                        <h5>CEO of Facebook</h5>
                                    </div>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>

                                <span><i className="fa fa-quote-left"></i></span>
                            </div>
                        </div>
                            
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feedback">
                                <div className="client-info">
                                    <div className="client-pic">
                                        <img src={clientImgTwo} alt="client-avatar" />
                                    </div>

                                    <div className="client-title">
                                        <h4>Alex Smith</h4>
                                        <h5>CEO of Twitter</h5>
                                    </div>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>

                                <span><i className="fa fa-quote-right"></i></span>
                            </div>
                        </div>
                            
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feedback">
                                <div className="client-info">
                                    <div className="client-pic">
                                        <img src={clientImgThree} alt="client-avatar" />
                                    </div>

                                    <div className="client-title">
                                        <h4>Olivia Smith</h4>
                                        <h5>CEO of Envytheme</h5>
                                    </div>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>

                                <span><i className="fa fa-quote-left"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Testimonial;