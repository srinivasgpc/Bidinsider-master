import React from 'react';
 
class HowWeWork extends React.Component {
    render(){
        return (
            <section id="howwework" className="how-work ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>How We <span>Work</span></h2>
                        <p>Here we implement stage by stage strategies to accomplish every single
                        task and the project with classified , systematic and industrial standards models. </p>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-work">
                                <h3>01.</h3>
                                <h4>Meetup</h4>
                                <p>Let's get started with a coffee or skye to discuss about your ideas enterprise
                                and the ways to achieve them</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-work">
                                <h3>02.</h3>
                                <h4>Idea Evalution</h4>
                                <p>After meetup we will make documentation of  all the formal work yo be documentation
                                 and get clear info about your idea the scope and the requirements to fulfill
                                 your idelogies of the project and post them  in top project managment tools 
                                 like Scoro,PROOFHUB,Basecamp so that both us can get a clear idea about what we a
                                 getting out</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-how-work">
                                <h3>03.</h3>
                                <h4>Sprints</h4>
                                <p>We break our Product development cycle into many sprints about 10 working days each
                                each sprint has a wednesday morning sprint planning and dialy 30 minutes standups
                                At every thursday we have a sprint conculsion demo and retrospective. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-how-work">
                                <h3>04.</h3>
                                <h4>Staging</h4>
                                <p>We setup a staging model with a server where our team will automatically depoly
                                updated code on it and you can check status of your project anytime anywhere on that
                                staging server and give us a feedback</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-how-work">
                                <h3>05.</h3>
                                <h4>Pre Launch</h4>
                                <p>Once every minor code was accomplished you can test it out on the staging
                            server and now you can give your acceptance and any regretness to 
                            us  so that we can prepare it for the Launch stage</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-how-work">
                                <h3>06.</h3>
                                <h4>Launch</h4>
                                <p>Acceptance of all the modules by you we arrange the launchpad for the project
                                and get it done with all well documented version of the project with all codes will
                                be delivered to you and we extend our support to you from thereafter.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default HowWeWork;