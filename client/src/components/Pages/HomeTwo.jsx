import React from 'react'
import MainBanner from '../PageBanners/MainBannerTwo';
import Skill from '../Common/Skill';
import Team from '../Common/Team';
import Services from '../Common/Services';
// import Price from '../Common/Price';
// import Partner from '../Common/Partner';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';
import GoTop from '../Common/GoTop';
 import WhyWeDifferent from '../Common/WhyWeDifferent';
class HomeTwo extends React.Component {
   
    render(){
        return (
            <React.Fragment>
                {/* Main Banner */}
                <MainBanner />

                 {/* Team Area */}
                 <Team />
                   {/* Skill Area */}
                   <Skill />
                 {/* Services Area */}
                 <WhyWeDifferent/>
                <Services />
               
                {/* Price Area 
                <Price />*/}
              
                {/* Partner Area 
                <Partner />*/}
                {/* Subscribe Area
                <Subscribe /> */}
                {/* Contact Area */}
                <Contact />
                {/* Footer Area */}
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default HomeTwo;