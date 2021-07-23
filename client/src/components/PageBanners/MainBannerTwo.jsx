import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import VisibilitySensor from "react-visibility-sensor";
 import AnchorLink from 'react-anchor-link-smooth-scroll';

const options = {
    items:1,
    loop:true,
    autoplay:true,
    nav:true,
    responsiveClass:true,
    dots:false,
    autoplayHoverPause:true,
    mouseDrag:true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ]
}
 
class MainBanner extends React.Component {
    render(){
        return (
            <OwlCarousel 
                id="home"
                className="home-slides owl-theme"
                {...options}
            >
            {this.props.slideData.map((data, idx) => (
                <div className={`main-banner ${data.klasName}`} key={idx}>
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-text">
                                                <h4 
                                                    className={
                                                        isVisible
                                                            ? "animated fadeInDown slow opacityOne" : ''
                                                    }
                                                    dangerouslySetInnerHTML={{ __html: data.heading }}  />
                                               
                                               
                                                <h1 
                                                    className={
                                                        isVisible
                                                            ? "animated fadeInDown slow opacityOne" : ''
                                                    }
                                                    dangerouslySetInnerHTML={{ __html: data.subHeading }}
                                                />

                                                <p 
                                                    className={
                                                        isVisible
                                                            ? "animated fadeInDown slow opacityOne" : ''
                                                    }
                                                >
                                                    {data.text}
                                                </p>
                                                <AnchorLink 
                                                    href="#about" 
                                                    className={`
                                                        btn btn-primary ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                    `}
                                                    
                                                    
                                                >
                                                    About
                                                </AnchorLink>
                                                <AnchorLink
                                                    href="#myservices" 
                                                    className={`
                                                        btn btn-primary view-work ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                    `}
                                                >
                                                    Services
                                                </AnchorLink>
                                                <AnchorLink
                                                href="#contact" 
                                                className={`
                                                    btn btn-primary view-work ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                `}
                                            >
                                                Contact Us
                                            </AnchorLink>
                                            </div>
                                        )}
                                        </VisibilitySensor>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </OwlCarousel>
        );
    }
}

MainBanner.defaultProps = {
    slideData: [
        {
            subHeading: "FIND RIGHT <span>GOVERNMENT CONTRACTS</span>",
            text: "Reliable source for government contracts, proposal outlines, technical support for compliance to keep you ahead of the competition.",
            klasName: "item-bg-one"
        },
        {
            
            heading: "<span>Bid-Insider</span> is a government contracting platform that enables businesses to manage public-private sector opportunities, pursue faster transactions, and strategically plan ahead of the competition.",
            klasName: "item-bg-four"
        },
        {
           
            heading: "Plan ahead of the <span>bid deadlines</span> and increase your response rate of the sales pipeline.",
            klasName:"item-bg-three"
           
        },
    ]
}
 
export default MainBanner;