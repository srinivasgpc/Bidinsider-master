import React from 'react';
// import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import teamOne from '../../assets/images/img-1.png';
import teamTwo from '../../assets/images/img-2.png';
import teamThree from '../../assets/images/img-3.png';
import teamFour from '../../assets/images/static/CDC.png';
import teamFive from '../../assets/images/static/DCMA.png';
// import teamSix from '../../assets/images/static/DHS.png';
import seven from '../../assets/images/static/DISA.png';
import eight from '../../assets/images/static/DOC.png';
import nine from '../../assets/images/static/DODEA.png';
// import ten from '../../assets/images/static/DOE.png';
import eleven from '../../assets/images/static/DOEducation.png';
import twelve from '../../assets/images/static/DOL.png';
// import thirteen from '../../assets/images/static/DON.png';
import fourteen from '../../assets/images/static/DOT.png';
import fifteen from '../../assets/images/static/DOTreasury.png';
import sixteen from '../../assets/images/static/DSCA.png';
import seventeen from '../../assets/images/static/EPA.png';
import eighteen from '../../assets/images/static/GSA.png';
import ninteen from '../../assets/images/static/NASA.png';
import twenty from '../../assets/images/static/NIH.png';
import twentyOne from '../../assets/images/static/USAF.png';
import twentyTwo from '../../assets/images/static/USDA.png';
import twentyThree from '../../assets/images/static/UDHUD.png';
import twentyFour from '../../assets/images/static/USACE.png';
import twentySix from '../../assets/images/static/VA.png';
import twentyFive from '../../assets/images/static/WHS.png';

const options = {
    loop: true,
    autoplay:true,
    nav: false,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        786: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}
 
class Team extends React.Component {
    render(){
        return (
            <section id="products" className="team-area ptb-80">
                <div className="container">
                    <div className="section-title">
                       
                        <h2>Our Government<span>Customers</span></h2>
                          </div>
                    
                    <div className="row">   
                        <OwlCarousel 
                            className="team-slider owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 main-con">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={teamOne} alt="DOA"/>
                                    </div>

                            
                                </div>
                            </div>
                            
                            <div className="col-lg-12 main-con">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={teamTwo} alt="DON" />
                                    </div>

                                  
                                </div>
                            </div>
                            
                            <div className="col-lg-12 main-con">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={teamThree} alt="DOE" />
                                    </div>

                                  
                                </div>
                            </div>
                            
                            <div className="col-lg-12 main-con">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={teamFour} alt="CDC" />
                                    </div>

                                   
                                </div>
                            </div>
                            
                            <div className="col-lg-12 main-con">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={teamFive} alt="DCMA" />
                                    </div>

                                </div>
                            </div>
                            
                            <div className="col-lg-12 main-con">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={seven} alt="DISA" />
                                    </div>

                                   
                                </div>
                            </div>
                            <div className="col-lg-12 main-con">
                            <div className="our-team">
                                <div className="pic">
                                    <img src={eight} alt="DOC" />
                                </div>

                               
                            </div>
                        </div>
                            <div className="col-lg-12 main-con">
                        <div className="our-team">
                            <div className="pic">
                                <img src={nine} alt="dodea" />
                            </div>

                           
                        </div>
                    </div>
              
                <div className="col-lg-12 main-con">
                <div className="our-team">
                    <div className="pic">
                        <img src={eleven} alt="DOEducation" />
                    </div>

                   
                </div>
            </div>
            <div className="col-lg-12 main-con">
            <div className="our-team">
                <div className="pic">
                    <img src={twelve} alt="DOL" />
                </div>

               
            </div>
        </div>
        
    <div className="col-lg-12 main-con">
    <div className="our-team">
        <div className="pic">
            <img src={fourteen} alt="DOT" />
        </div>

       
    </div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={fifteen} alt="DOTreasury" />
    </div>

   
</div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={sixteen} alt="DSCA" />
    </div>

   
</div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={seventeen} alt="EPA" />
    </div>

   
</div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={eighteen} alt="GSA" />
    </div>

   
</div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={ninteen} alt="NASA" />
    </div>

   
</div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={twenty} alt="NIH" />
    </div>

   
</div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={twentyOne} alt="USAF" />
    </div>

   
</div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={twentyTwo} alt="USDA" />
    </div>

   
</div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={twentyThree} alt="UDHUG" />
    </div>

   
</div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={twentyFour} alt="DHS" />
    </div>

   
</div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={twentyFive} alt="WHS" />
    </div>

   
</div>
</div>
<div className="col-lg-12 main-con">
<div className="our-team">
    <div className="pic">
        <img src={twentySix} alt="VA" />
    </div>

   
</div>
</div>



                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Team;