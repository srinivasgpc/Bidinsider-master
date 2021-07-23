import React from 'react';
// import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
 import AnchorLink from 'react-anchor-link-smooth-scroll';
//  import { Link } from 'react-router-dom';
// import videoImg from '../../assets/images/video-img.jpg';
 
class Skill extends React.Component {
    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({isOpen: true})
    }
    render(){
        return (
            <section className="skill-area pt-4 bg-f6f6f6" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="about-skill mb-4">
                                <div className="section-title">
                                    <h2>About  <span>Bid-Insider</span></h2>
                                    <p className="mt-2">Powering Project Success. Bid-Insider is product of the BidKinetics Consulting, whose mission is to enhance proposal success rate by delivering global standards of proposal intelligence, contract evaluation, management, and collaboration.</p>
                                    <p className="mt-2">
                                    Get compliant RFP outlines with compliance matrices on the same day upon announcement to advance your competition. Start collaborating with your team and distribute structured RFP outlines to remote members or your technical SMEs. Access thousands of RFP outline incorporated with comprehensive evaluation criteria of government agencies and transferred to customer-ready layouts.</p>
                                   <p className="mt-2"> Gaining a competitive advantage by being a small business, saving valuable time and winning more contracts. Our proposal response products will allow you to gain competitive advantages and achieve the following proposal related key performance indicators:
                                     </p>
                                </div>
                                
                                <h3 className="progress-title"> Increase in bid response rate by 32%
                                </h3>
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "32%"}}>
                                        <div className="progress-value">32%</div>
                                    </div>
                                </div>
                                
                                <h3 className="progress-title">Increase in the proposal compliance rate by 18%</h3>
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "18%"}}>
                                        <div className="progress-value">18%</div>
                                    </div>
                                </div>
                                
                                <h3 className="progress-title">99% of Coverage for all small businesses set-aside RFP/RFQs
                                </h3>
                                <div className="progress">
                                    <div className="progress-bar" style={{width: "99%"}}>
                                        <div className="progress-value">99%</div>
                                    </div>
                                </div>
                                
                                <h3 className="progress-title"><AnchorLink href="#contact">Contact us</AnchorLink> to receive <strong>Contract specific self-evaluation form</strong> which is now available</h3>
                               
                            </div>
                    
                            <div className="section-title mt-4">
                                    <h2 className="pb-3"> <span>Strategy</span></h2>
                                    <p className="mt-2">Bid-Insider (B-I): Trusted as the platform that outlines the most responsive proposal
</p>
                                    <p className="mt-2">
                                    
                                    Our Strategy: To prepare each RFP outline, we use a unified approach, whether with a new initiative, an existing contract, or a transformative effort that requires a bid. Our wide range of knowledge and exposure provides us with the experience needed to provide an accurate and compliant outline, technical response guidance, technical charts, safety features, and recommendations for project delivery. This approach helps us to focus intensively on small business success RFP evaluation criteria and prepare your response for wins.
                                    
  </p>
                                   <p className="mt-2"> We begin by setting goals by reviewing, collecting, implementing design and preparing compliant outlines for your business from the perspective of the contractor/offeror, as well as from the perspective of the member of evaluation panel/source selection team. Bid-Insider ensures that the outlined solution can be managed and maintained in the future so that your team members are always ready for the next thing.
                                   .
                                     </p>
                                </div>
                            </div>
                    
                     {/*   <div className="col-lg-6 col-md-12">
                            <div className="skill-video">
                                <img src={videoImg} alt="video-img" />
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
                        </div>*/}
                    </div>
                </div>

            </section>
        );
    }
}
 
export default Skill;