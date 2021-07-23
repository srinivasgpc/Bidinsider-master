import React from 'react';
import BlogBanner from '../PageBanners/BlogBanner';
import Content from '../Blog/Content';
import Footer from '../Common/Footer';
 
class Blog extends React.Component {
    render(){
        return (
            <React.Fragment>
                <BlogBanner />
                <Content />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Blog;