import React from 'react';
import { Link } from 'react-router-dom';
 
class Price extends React.Component {
    render(){
        return (
            <section id="price" className="price-area ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Products <span>Pricing</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricingTable">
                                <h3 className="title">Basic</h3>
                                <div className="price-value">
                                    <span className="currency">$</span>
                                    <span className="amount">39.00</span>
                                    <span className="month">/Per month</span>
                                </div>
                                <ul className="pricing-content">
                                    <li><i className="fa fa-check"></i> Any Ware Access</li>
                                    <li><i className="fa fa-check"></i> 10 GB Hosting</li>
                                    <li><i className="fa fa-check"></i> 2 Unique Users</li>
                                    <li><i className="fa fa-check"></i> 12 GB Capacity</li>
                                    <li><i className="fa fa-check"></i> Weekly Backups</li>
                                    <li><i className="fa fa-check"></i> Support 24 / hour</li>
                                </ul>
                                <Link to="#" className="btn btn-primary">Order Now</Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="pricingTable">
                                <h3 className="title">Standard</h3>
                                <div className="price-value">
                                    <span className="currency">$</span>
                                    <span className="amount">49.00</span>
                                    <span className="month">/Per month</span>
                                </div>
                                <ul className="pricing-content">
                                    <li><i className="fa fa-check"></i> Any Ware Access</li>
                                    <li><i className="fa fa-check"></i> 15 GB Hosting</li>
                                    <li><i className="fa fa-check"></i> 5 Unique Users</li>
                                    <li><i className="fa fa-check"></i> 17 GB Capacity</li>
                                    <li><i className="fa fa-check"></i> Weekly Backups</li>
                                    <li><i className="fa fa-check"></i> Support 24 / hour</li>
                                </ul>
                                <Link to="#" className="btn btn-primary">Order Now</Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="pricingTable">
                                <h3 className="title">Premium</h3>
                                <div className="price-value">
                                    <span className="currency">$</span>
                                    <span className="amount">59.00</span>
                                    <span className="month">/Per month</span>
                                </div>
                                <ul className="pricing-content">
                                    <li><i className="fa fa-check"></i> Any Ware Access</li>
                                    <li><i className="fa fa-check"></i> 20 GB Hosting</li>
                                    <li><i className="fa fa-check"></i> 10 Unique Users</li>
                                    <li><i className="fa fa-check"></i> 21 GB Capacity</li>
                                    <li><i className="fa fa-check"></i> Weekly Backups</li>
                                    <li><i className="fa fa-check"></i> Support 24 / hour</li>
                                </ul>
                                <Link to="#" className="btn btn-primary">Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Price;