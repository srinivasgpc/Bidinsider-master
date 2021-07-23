import React, { Component } from 'react';
import '../../assets/css/font-awesome.min.css';
 
import {Button, Modal} from 'react-bootstrap';
class ViewModal extends Component {


    render(props) {
    
        return (
            <Modal
            show={this.props.show}
          
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="contained-modal-title-vcenter modal-title">
         File Title: <span>{this.props.title}</span>
        </Modal.Title>
      <i className="fa fa-times"  onClick={this.props.onHide} aria-hidden="true"></i>
      </Modal.Header>
      <Modal.Body className="modal-desc">
        <h6 className="mb-3 ">File Description</h6>
        <p className="file-descr">
         {this.props.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        );
    }
}



export default ViewModal;