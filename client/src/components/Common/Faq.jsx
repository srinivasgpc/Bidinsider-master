import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
 
class Faq extends React.Component {
    render(){
        return (
            <section className="faq-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently Asked <span>Question</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What harsh truths do you prefer to ignore?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                                cupidatat occaecat ut occaecat consequat est minim minim
                                                esse tempor laborum consequat esse adipisicing eu
                                                reprehenderit enim.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-12">
                            <div className="image"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Faq;