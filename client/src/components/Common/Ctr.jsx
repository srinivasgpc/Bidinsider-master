import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
 
const Ctr = () => {
    return (
        <section className="ctr-area ptb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="section-title mb-0">
                            <h4>Looking for exclusive services?</h4>
                            <h2>Get The Best </h2>
                            <p>For any project discussions,
                            To kick start your innovative ideas,
                            Work as freelancer to showcase yourskills</p>
                            <AnchorLink href="#contact" className="btn btn-primary">Contact</AnchorLink>
                         {/*   <AnchorLink href="#work" className="btn btn-primary view-work">View Work</AnchorLink>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
 
export default Ctr;