import React from 'react';
import { Link } from 'react-router-dom';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h4><Link to="/">Bid Insider</Link></h4>
                            <ul className="d-none">
                                <li><Link to="#" className="fa fa-facebook"></Link></li>
                                <li><Link to="#" className="fa fa-twitter"></Link></li>
                                <li><Link to="#" className="fa fa-skype"></Link></li>
                                <li><Link to="#" className="fa fa-instagram"></Link></li>
                                <li><Link to="#" className="fa fa-linkedin"></Link></li>
                            </ul>
                            <p>Copyright <i className="fa fa-copyright"></i> 2019 All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;