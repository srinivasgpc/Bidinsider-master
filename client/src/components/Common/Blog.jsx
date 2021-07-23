import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

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
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
}
 
class Blog extends React.Component {
    render(){
        return (
            <section id="blog" className="blog-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h4>Our News</h4>
                        <h2>Latest Blog <span>Posts</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    
                    <div className="row">
                        <OwlCarousel 
                            className="blog-slider owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img1.jpg")})`}}>
                                    <span>Business & Tech</span>
                                    <h4><Link to="#">The best gear for starting Link small business</Link></h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img2.jpg")})`}}>
                                    <span>Business & Tech</span>
                                    <h4><Link to="#">Get your first business suit right with these tips</Link></h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img3.jpg")})`}}>
                                    <span>Design & IT</span>
                                    <h4><Link to="#">How to Make Link Font - Font Design Full Process</Link></h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img4.jpg")})`}}>
                                    <span>Marketing & Trend</span>
                                    <h4><Link to="#">10 Hot Marketing Trends You Need to Implement in 2018</Link></h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img5.jpg")})`}}>
                                    <span>Business & Tech</span>
                                    <h4><Link to="/blog-details">How to Be Link Work From Home Professional</Link></h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Blog;