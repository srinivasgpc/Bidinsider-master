import React from 'react';
// import imgOne from '../../assets/images/services-img1.jpg';
// import imgTwo from '../../assets/images/services-img2.jpg';
// import imgThree from '../../assets/images/services-img3.jpg';
// import imgFour from '../../assets/images/services-img4.jpg';
// import imgFive from '../../assets/images/services-img5.jpg';
// import imgSix from '../../assets/images/services-img6.jpg';
// import imgSeven from '../../assets/images/services-img7.jpg';
// import imgEight from '../../assets/images/services-img8.jpg';
// import imgNine from '../../assets/images/services-img9.jpg';
 
class Services extends React.Component {
    render(){
        return (
            <section id="myservices" className="services-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Our <span>Services</span></h2>
                           </div>
                
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                             {/*   <div className="services-img">
                                    <img src={imgOne} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-pencil-square-o"></i>
                                    </div>
                                </div>*/}
                                
                                <div className="services-content">
                                    <h3>Full Capture Management</h3>
                                      </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                {/*   <div className="services-img">
                                    <img src={imgOne} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-pencil-square-o"></i>
                                    </div>
                                </div>*/}
                                
                                <div className="services-content">
                                    <h3>Bid Consulting</h3>
                                   </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                              {/*   <div className="services-img">
                                    <img src={imgOne} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-pencil-square-o"></i>
                                    </div>
                                </div>*/}
                                
                                <div className="services-content">
                                    <h3>Customized Bid Outlines</h3>
                                    </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                {/*   <div className="services-img">
                                    <img src={imgOne} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-pencil-square-o"></i>
                                    </div>
                                </div>*/}
                                <div className="services-content">
                                    <h3>Subcontractor Sourcing</h3>
                                  </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                 {/*   <div className="services-img">
                                    <img src={imgOne} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-pencil-square-o"></i>
                                    </div>
                                </div>*/}
                                
                                <div className="services-content">
                                    <h3>Competitor Analysis</h3>
                                    </div>
                            </div>
                        </div>
                        
                   
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                 {/*   <div className="services-img">
                                    <img src={imgOne} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-pencil-square-o"></i>
                                    </div>
                                </div>*/}
                                
                                <div className="services-content">
                                    <h3>Proposal Development</h3>
                                   </div>
                            </div>
                        </div>
                        
                 
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-services">
                                 {/*   <div className="services-img">
                                    <img src={imgOne} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-pencil-square-o"></i>
                                    </div>
                                </div>*/}
                                <div className="services-content">
                                    <h3>Technical SME staff Augmentation</h3>
                                      </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <div className="single-services">
                           {/*   <div className="services-img">
                                <img src={imgOne} alt="services-img" />
                                
                                <div className="icon">
                                    <i className="fa fa-pencil-square-o"></i>
                                </div>
                            </div>*/}
                            
                            <div className="services-content">
                                <h3>Market Assessment and Procurement Forecasting</h3>
                                 </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Services;