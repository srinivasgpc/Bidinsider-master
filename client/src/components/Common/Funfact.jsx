import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
 
class Funfact extends React.Component {
    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };

    render(){
        return (
            <section className="funFacts-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="funFact">
                                <i className="fa fa-smile-o"></i>
                                <h2 className="count">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={-100}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 3
                                                    : 0
                                            }
                                            duration={30}
                                        />
                                    </VisibilitySensor>
                                </h2>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="funFact">
                                <i className="fa fa-shield"></i>
                                <h2 className="count">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={-100}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 12
                                                    : 0
                                            }
                                            duration={30}
                                        />
                                    </VisibilitySensor>
                                </h2>
                                <p>Completed and ongoing projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="funFact">
                                <i className="fa fa-trophy"></i>
                                <h2 className="count">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={-100}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 0
                                                    : 0
                                            }
                                            duration={30}
                                        />
                                    </VisibilitySensor>
                                </h2>
                                <p>Wining Awards Trophy will be added by next year</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="funFact">
                                <i className="fa fa-users"></i>
                                <h2><span className="count">
                                    <VisibilitySensor
                                        onChange={this.onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                this.state.didViewCountUp
                                                    ? 16
                                                    : 0
                                            }
                                            duration={30}
                                        />
                                    </VisibilitySensor>
                                </span></h2>
                                <p>Team Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Funfact;