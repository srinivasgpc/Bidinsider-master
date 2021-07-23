import React from 'react'
 
class Subscribe extends React.Component {
    state = {
        term: ''
    }
    onFormSubmit = e => {
        e.preventDefault();
    }
    render(){
        return (
            <section className="subscribe-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="newsletter">
                                <h4>Join Our Newsletter</h4>
                                <form onSubmit={this.onFormSubmit} className="newsletter-form" data-toggle="validator">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Your Email Address" 
                                        name="EMAIL" 
                                        autoComplete="off"
                                        value={this.state.term}
                                        onChange={e => this.setState({term: e.target.value})}
                                    />
                                    <button className="btn btn-primary" type="submit">Subscribe</button>
                                    <div id="validator-newsletter" className="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Subscribe;