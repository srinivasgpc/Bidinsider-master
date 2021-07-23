import React from 'react';
import WaterWave from 'react-water-wave';
import { Link } from 'react-router-dom';
import image from '../../assets/images/main-bg-2.jpg';
 
const BlogDetailsBanner = React.memo(() => (
    <WaterWave 
        style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
        imageUrl={image}>
    {() => (
        <div className="page-title">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <h1>Single Post</h1>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><i className="fa fa-angle-right"></i></li>
                                    <li className="active">Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
    </WaterWave>
))
 
export default BlogDetailsBanner;