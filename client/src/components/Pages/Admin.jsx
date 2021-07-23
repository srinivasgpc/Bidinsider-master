import React, { Component } from 'react';
import uploadDocuments from '../../store/apiCalls/uploadDocument';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';



class Admin extends Component {
    constructor() {
        super();
        this.state = {
            file:'',
            solNumber:'0',
            setStatus:'',
            facilClear:'',
            filePrice:0,
            fileDesc:'',
            fileTitle:'',
            fileWeight:0,
            set_aside_data:[],
            fac_clear_data:[],
            uploadStats:null
         
         

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.updateJson = this.updateJson.bind(this);
        this.selectSetAside= this.selectSetAside.bind(this);
        this.selectFacility= this.selectFacility.bind(this);
      }

      selectDefault(){
        this.setState({
          set_aside_data: [
           {id: 'All', name: 'Select Set Aside Status'},
            {id: '8a', name: '8(a)'},
            {id: 'sdvosb', name: 'SDVOSB'},
            {id: 'wosb', name: 'WOSB'},
            {id: 'edwosb', name: 'EDWOSB'},
            {id: 'hubzone', name: 'Indian Hub Zone'},
            {id: 'none', name: 'None'},
        
          ],
          fac_clear_data: [
           {id: 'All', name: 'Select Facility Clearance Requirement'},
            {id: 'topsecret', name: 'Top Secret'},
            {id: 'secret', name: 'Secret'},
            {id: 'none', name: 'None'}
          ],
          uploadStats:null
        })
      }
      componentDidMount() {
        let elementId = document.getElementById("navbar");
                elementId.classList.add("back-black");
                this.selectDefault();
               
    }
    componentWillUnmount(){
        let elementId = document.getElementById("navbar");
                elementId.classList.remove("back-black");
    }

    componentWillReceiveProps(nextProps) {
      this.setState( {
         uploadStats: nextProps.upload
      });
    }
      validateForm = () => {
        if(this.state.file  === "" || this.state.file ===null){
          alert("Please choose a file ");
          return false;
          
        }
        
        else if(this.state.solNumber  ==="0"){
          alert("Please enter Solicitation Number");
          return false;
        }
        else if(this.state.setStatus  ==="All" || this.state.setStatus  ==="" ){
          alert("Please select Set Aside Status");
          return false;
        }
      
        else if(this.state.facilClear  ==="All" || this.state.facilClear  ===""){
          alert("Please select Facility Clearance Requirement");
          return false;
        }
        else if(this.state.filePrice  === 0){
          alert("Please enter a Price value");
          return false;
        }
        else if(this.state.fileDesc  === ""){
          alert("Please enter a File Description");
          return false;
        }
        else if(this.state.fileTitle===""){
          alert("Please enter a File Title");
          return false;
        }
         return true;
      
      }
      changeFile=(e)=>{
       
        this.setState({file: e.target.files[0]})
      }
      handleSubmit = (e) => {
        e.preventDefault();
        if(this.validateForm()){
          debugger;
          const formData= new FormData();
          formData.append('document', this.state.file);
          formData.append('f_sol_number', this.state.solNumber);
          formData.append('f_set_aside_status', this.state.setStatus);
          formData.append('f_fac_clear', this.state.facilClear);
          formData.append('f_price', this.state.filePrice);
          formData.append('f_desc', this.state.fileDesc);
          formData.append('f_weight', 0);
          formData.append('f_con_title',this.state.fileTitle);
         this.props.uploadDocuments(formData);
          this.fileInput.value="";
          this.setState({
            file:null,
            solNumber:'0',
            filePrice:0,
            fileDesc:'',
            fileTitle:'',
            fileWeight:0,
            set_aside_data:[],
            fac_clear_data:[],
            setStatus:'',
            facilClear:'',
          });
         
          this.selectDefault();
      }
     
       
      }
      selectSetAside= (e)=>{
  
        this.setState({
          setStatus: e.target.value
        })
      }
      selectFacility= (e)=>{
        this.setState({
          facilClear: e.target.value
        })
      }
      changeDescTitle=(e, value)=>{
      
        var val= e.target.value;
        if (val.indexOf('\'') >= 0 || val.indexOf('"') >= 0) {

          alert("(Single/Double quotes not allowed)");
       }
       else{
        if(value.toLowerCase()=== "filetitle"){
          this.setState({
            fileTitle: e.target.value
          })
          }
          else{
            this.setState({
              fileDesc: e.target.value
            })
          }
       }
    

      }
      
    render() {
      const {auth}= this.props;
      const  { set_aside_data, fac_clear_data } = this.state;
      if(!auth.isadmin) return <Redirect to='/signin' />
        return (
          <div className="col-md-12 pt-4 d-main" >
          <div className="container"> <form
                    onSubmit={this.handleSubmit}
                    className="form-signin"
                  >
                    <div className="form-label-group">
                      <input
                        type="file"
                        id="file"
                        className="form-control"
                        placeholder="Upload File"
                        ref={ref=> this.fileInput = ref} 
                        onChange={this.changeFile}
                       
                      />
                      <label htmlFor="File">File</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="solNumber"
                        className="form-control"
                        placeholder="Solicitation Number"
                        value={this.state.solNumber}
                        onChange={e =>  this.setState({solNumber: e.target.value})}
                      />
                      <label htmlFor="solNumber">Solicitation Number</label>
                    </div>
                    <div className="form-label-group">
                    
                    <span htmlFor="Set Aside Status" className="label-stat">Set Aside Status</span>
                    <select className="form-control" onChange= {this.selectSetAside} value={this.state.setStatus}> 
                  
                    {
                        set_aside_data.length > 0
                        && set_aside_data.map((item, i) => (
                        <option key={i} value={item.id}>{item.name}</option>))
                      }
                
      
                      </select>

                    </div>
                    <div className="form-label-group">
                     
                    <span htmlFor="Facility Clear" className="label-stat"> Facility Clearance Requirement</span>
                    <select className="form-control" onChange= {this.selectFacility} value={this.state.facilClear}> 
                   
                 {   fac_clear_data.length > 0
              && fac_clear_data.map((item, i) => (  <option key={i} value={item.id}>{item.name}</option>
                ))}
                    </select>

                    </div>
                    <div className="form-label-group">
                      <input
                        type="number"
                        id="filePrice"
                        className="form-control"
                        placeholder="Price"
                        value={this.state.filePrice}
                        onChange={e => this.setState({filePrice: e.target.value})}
                      />
                      <label htmlFor="Price">Price</label>
                    </div>
                    <div className="label-new">
                    <label htmlFor="Description" className="label-stat">File Description (Single/Double quotes are not allowed)</label>
                      <input
                        type="text"
                        id="fileDesc"
                        className="form-control"
                        placeholder="Description"
                        value={this.state.fileDesc}
                        onChange={(e) => this.changeDescTitle(e, 'fileDesc')}
                      />
                      
                    </div>
                    <div className="label-new">
                    <label htmlFor="File Title" className="label-stat">File Title (Single/Double quotes are not allowed)</label>
                 
                      <input
                        type="text"
                        id="fileTitle"
                        className="form-control"
                        placeholder="File Title"
                        value={this.state.fileTitle}
                        onChange={(e) => this.changeDescTitle(e, 'filetitle')}
                      />
                      </div>
                  
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Upload Document
                    </button>
                    {this.state.uploadStats !==null ?
                      <div 
                        className="alert alert-success alert-dismissible fade show" 
                        style={{ marginTop: '14px' }}
                    >
                        Document successfully uploaded
                        
                    </div>
                     
                     : null}
                  </form>
      
            </div>
            </div>

        );
    }
}


const mapStateToProps= (state)=> {

  return {
        auth: state.auth,
        upload: state.upload.document
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  uploadDocuments: uploadDocuments
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Admin);

