import React from 'react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/about.jpg';
 
class About extends React.Component {
    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({isOpen: true})
    }
    render(){
        return (
            <section id="about" className="about-area ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>About <span>TechPoT</span></h2>
                        <p>The concept of TechPoT as a virtual company is that here the services we offer are 
                        delivered by the best resources around the world in the short time by cloud based services</p>
                        
                        <p>Here we made a hybrid approach in establishing the company with traditional and vitual concepts
                        by having our resources work around the clock.</p>

                
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-addax">
                                <div className="section-title">
                                    <h2>We Are TechPoT <span>Media & It Services</span></h2>
                                    <p>We offer the services in Web development , Mobile development , Healthcare services ,
                                    Customer Software development ,Progressive Webapps development , AI, Ar & VR technologies,
                                    Digital Media Managment </p>
                                </div>

                                <p></p>

                              {/*}  <ul className="pull-left">
                                    <li><i className="fa fa-check"></i>Creative Design</li>
                                    <li><i className="fa fa-check"></i>Retina Ready</li>
                                    <li><i className="fa fa-check"></i>Responsive Design</li>
                                </ul>

                                <ul>
                                    <li><i className="fa fa-check"></i>Modern Design</li>
                                    <li><i className="fa fa-check"></i>Awesome Design</li>
                                    <li><i className="fa fa-check"></i>Digital Marketing & Branding</li>
                                </ul>

                                <Link to="#" className="btn btn-primary">Read More</Link>*/}
                            </div>
                        </div>
                        
                   {/*   <div className="col-lg-6 col-md-12">
                            <div className="about-video">
                                <img src={aboutImg} alt="about" />
                                <div className="video-btn">
                                    <Link 
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        to="#" 
                                        className="popup-youtube"
                                    >
                                        <i className="fa fa-play"></i>
                                    </Link>
                                    <ModalVideo 
                                        channel='youtube' 
                                        isOpen={this.state.isOpen} 
                                        videoId='bk7McNUjWgw' 
                                        onClose={() => this.setState({isOpen: false})} 
                                    />
                                </div>
                            </div>
                            </div>  */}
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;