import React from 'react';
import { Link } from 'react-router-dom';
import BlogDetailsBanner from '../PageBanners/BlogDetailsBanner';
import image from "../../assets/images/blog-details.jpg";
import clientImageOne from "../../assets/images/client-avatar1.jpg";
import clientImageTwo from "../../assets/images/client-avatar2.jpg";
import clientImageThree from "../../assets/images/client-avatar3.jpg";
import Footer from '../Common/Footer';
 
class BlogDetails extends React.Component {
    render(){
        return (
            <React.Fragment>
                <BlogDetailsBanner />

                <section className="blog-details-area ptb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 offset-lg-2">
                                <div className="blog-details">
                                    <div className="article-img">
                                        <img 
                                            src={image}
                                            alt="blog-details" 
                                        />
                                        <div className="date">20 <br /> Dec</div>
                                    </div>
                                    
                                    <div className="article-text">
                                        <ul className="category">
                                            <li><Link to="#">IT</Link></li>
                                            <li><Link to="#">Mobile</Link></li>
                                            <li><Link to="#">Marketing</Link></li>
                                            <li><Link to="#">Design</Link></li>
                                            <li><Link to="#">Development</Link></li>
                                        </ul>
                                        
                                        <h4 className="title">How to Be Link Work From Home Professional</h4>
                                        
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In necessitatibus provident facere, reiciendis voluptate dolorem iste consectetur veniam aperiam suscipit ad ipsum et labore Link repellendus debitis explicabo quisquam obcaecati....</p>
                                        
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                        
                                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                        
                                        <blockquote className="blockquote">
                                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.</p>
                                        </blockquote>
                                        
                                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus Link labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!</p>
                                        
                                        <div className="author-share">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="article-author">
                                                        <div className="author-img">
                                                            <img 
                                                                src={clientImageOne}
                                                                alt="client"
                                                            />
                                                        </div>

                                                        <div className="author-title">
                                                            <h4>John Smith</h4>
                                                            <span>Back-End Developer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="social-share">
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Facebook"><i className="fa fa-facebook"></i></Link></li>
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Twitter"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Linkedin"><i className="fa fa-linkedin"></i></Link></li>
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Instagram"><i className="fa fa-instagram"></i></Link></li>
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Google Plus"><i className="fa fa-google-plus"></i></Link></li>
                                                        <li><Link to="#" data-toggle="tooltip" data-placement="top" title="Share on Vimeo"><i className="fa fa-vimeo"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="post-controls-buttons">
                                    <div className="controls-left">
                                        <Link to="#"><i className="fa fa-angle-double-left"></i> Prev Post</Link>
                                    </div>

                                    <div className="controls-right">
                                        <Link to="#">Next Post <i className="fa fa-angle-double-right"></i></Link>
                                    </div>
                                </div>
                                
                                <div className="post-comments">
                                    <h3 className="title mt-0">Comments</h3>
                                    <div className="single-comment">
                                        <div className="comment-img">
                                            <img 
                                                src={clientImageTwo} 
                                                alt="client" 
                                            />
                                        </div>
                                        <div className="comment-content">
                                            <h4>Justin Theroux</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro Link voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                            <span>Dec 19, 2018 - 9:10AM</span>
                                            <Link to="#">Reply</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="single-comment left-m">
                                        <div className="comment-img">
                                            <img 
                                                src={clientImageOne} 
                                                alt="client" 
                                            />
                                        </div>
                                        <div className="comment-content">
                                            <h4>Isla Fisher</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro Link voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                            <span>Dec 19, 2018 - 9:10AM</span>
                                            <Link to="#">Reply</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="single-comment">
                                        <div className="comment-img">
                                            <img 
                                                src={clientImageThree} 
                                                alt="client" 
                                            />
                                        </div>
                                        <div className="comment-content">
                                            <h4>Katie Holmes</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro Link voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                            <span>Dec 19, 2018 - 9:10AM</span>
                                            <Link to="#">Reply</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="single-comment mb-0">
                                        <div className="comment-img">
                                            <img 
                                                src={clientImageTwo} 
                                                alt="client" 
                                            />
                                        </div>
                                        <div className="comment-content">
                                            <h4>Tom Cruise</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro Link voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                            <span>Dec 19, 2018 - 9:10AM</span>
                                            <Link to="#">Reply</Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="leave-Link-reply">
                                    <h3 className="title mt-0">Leave Link Reply</h3>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" placeholder="Full Name" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" placeholder="E-Mail" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="comment" cols="30" rows="5" className="form-control" placeholder="Your Comment"></textarea>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default BlogDetails;