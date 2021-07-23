import React from 'react';
import { Link } from 'react-router-dom';
// import imgOne from '../../assets/images/different-img1.jpg';
// import imgTwo from '../../assets/images/different-img2.jpg';
// import imgThree from '../../assets/images/different-img3.jpg';
// import imgFour from '../../assets/images/different-img4.jpg';
 
class WhyWeDifferent extends React.Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-panel");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" checked", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += " checked";
    }

    render(){
        return (
            <section id="myservices" className="why-we-different mb-4 bg-f6f6f6">
                <div className="container">
                <div>
                
                
                   <h5 className="mb-3">
                   
Core Features of Our Bid-Insider Outlines</h5>
            <div className="mb-3">
           <p> Bid-Insider provides you with the necessary user guidance and engaging support to improve your proposal preparation processes, on various crucial proposal mandates such as cover page, transmittal letter, index, compliance matrix, business demographics chart, executive summary, propose a solution, develop technical approach, and technique and methodology to appendices.</p></div>
                </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                        <div>Click on the following individual boxes to see the detailed description below:</div>
                            <div className="tabset pb-4">
                                {/* <!-- Tab 1 --> */}
                                <label 
                                onClick={(e) => this.openTabSection(e, 'Access-control')} 
                                className="tablinks checked" 
                                name="tabset" 
                                id="tab6" 
                                aria-controls="Access-control"  
                                htmlFor="tab6"
                            >
                            Access expert RFP guidance on process improvement
                            </label>
                                <label 
                                    onClick={(e) => this.openTabSection(e, 'Web-Mobile')} 
                                    className="tablinks" 
                                    name="tabset" 
                                    id="tab1" 
                                    aria-controls="Web-Mobile"  
                                    htmlFor="tab1"
                                >
                                Responsive RFP Outline
                                </label>
                                {/* <!-- Tab 2 --> */}
                                <label 
                                    onClick={(e) => this.openTabSection(e, 'health-care-services')} 
                                    className="tablinks" 
                                    name="tabset" 
                                    id="tab2" 
                                    aria-controls="health-care-services"  
                                    htmlFor="tab2"
                                >
                                Outline Development Strategy for Ease of Proposal Preparation

                                </label>
                                {/* <!-- Tab 3 --> */}
                                <label 
                                    onClick={(e) => this.openTabSection(e, 'customer-software')} 
                                    className="tablinks" 
                                    name="tabset" 
                                    id="tab3" 
                                    aria-controls="customer-software"  
                                    htmlFor="tab3"
                                >
                                Data Management
                                </label>
                                {/* <!-- Tab 4 --> */}
                                <label 
                                    onClick={(e) => this.openTabSection(e, 'digital-media-marketing')} 
                                    className="tablinks" 
                                    name="tabset" 
                                    id="tab4" 
                                    aria-controls="digital-media-marketing"  
                                    htmlFor="tab4"
                                >
                                Proposal Outline Quality Assurance
                                </label>

                                <label 
                                    onClick={(e) => this.openTabSection(e, 'ar-vr')} 
                                    className="tablinks" 
                                    name="tabset" 
                                    id="tab3" 
                                    aria-controls="ar-vr"  
                                    htmlFor="tab3"
                                >
                                Preparation Logistics
                                </label>
                               
                                <div className="tab-panels">
                                   <section id="Access-control" className="tab-panel" style={{display: "block"}}>
                                   <div className="row">
                                    <div className="col-lg-12">
                                        <div className="why-we-different-text">
                                            
<p>Bid-Insider provides you with the necessary user guidance and engaging support to improve your proposal preparation processes, on various crucial proposal mandates such as cover page, transmittal letter, index, compliance matrix, business demographics chart, executive summary, propose a solution, develop technical approach, and technique and methodology to appendices.
</p>
                                         
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                                   </section>
                            
                                    <section id="Web-Mobile" className="tab-panel" >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="why-we-different-text">
                                                    
        <p>Our approach to bid outline is to strictly capture all the crucial information set forth by the contracting authority. Our outlines leverage methodologies and approaches that are scalable and flexible to meet the goals of the Government buying organizations.
        </p>
                                                    
                                                </div>
                                            </div>
                                   
                                        </div>
                                    </section>
                                    
                                    <section id="health-care-services" className="tab-panel">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="why-we-different-text">
                                        
<p>In order to perform the tasks of each Member involved in formulating the proposals, we document the method of coordinating the technical solution. We create a strategy based on which stakeholder engagement services can be provided through a centralized model across business processes.
</p>
                                                    
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </section>
                                    <section id="customer-software" className="tab-panel">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="why-we-different-text">
 <p>Requirements for the mandatory data will be migrated from the Government RFP legacy Source or SOW/PWS. We define the authoritative source as any other legacy Government document(s), which is the sole source of data for an object of response to the contract proposal. Where conditions or requirements require extraction from a different source, this information is validated by our contracting Subject Experts.
 </p>
                                                
                                            </div>
                                        </div>
                                       
                                    </div>
                                </section>                                    
                                   
                                    
                                    <section id="digital-media-marketing" className="tab-panel">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="why-we-different-text">
<p>The Proposal Outline Quality Assurance (POQA) is to verify that key information contained in Section L-Instructions for Offerors is reliable and efficient. Ensure reliability of data quality and efficiency of the outline solution. Our SMEs establish validation checklists for source-to-target and post-data load for each bid outlines. Our SMEs are monitoring, reporting and implementing mistakes related to compliance data verification, duplication and missing data compliance criteria.
</p>
                                                </div>
                                            </div>
                                            
                                         
                                        </div>
                                    </section>

                                    <section id="ar-vr" className="tab-panel">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="why-we-different-text">
                                    
<p>Using our outlines, it is easy to exceed the proposal response requirements set out in all applicable sections of the PWS / SOW, and will remain in force for the duration of the timeline for the preparation of the proposal.
</p>
                                                
                                            </div>
                                        </div>
                                        
                                       
                                    </div>
                                </section>

                                   
                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default WhyWeDifferent;