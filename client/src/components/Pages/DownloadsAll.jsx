import React, {
    Component
} from 'react';

import {
    connect
} from 'react-redux';
import fetchDocuments from '../../store/apiCalls/documentsGet';
import DisplayDoc from '../Documents/DisplayDoc';
import * as Constants from "../Common/Constants";
// import {
//     addDocument
// } from '../../store/actions/cartActions';
import {
    Spinner
} from 'react-bootstrap';
import ViewModal from '../Common/Modal';


class DownloadsAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: [],
            filterDocuments: [],
            cartItems: [],
            set_aside_data: [],
            fac_clear_data: [],
            token: '',
            modalShow: false,
            description:'',
            title:''
            

        }
       
        this.deleteDocument = this.deleteDocument.bind(this);
        this.getFacList = this.getFacList.bind(this);
        this.getSetList = this.getSetList.bind(this);
      
    }



    componentWillMount() {
        this.props.fetchDocuments();
        const {
            documents,
            token
        } = this.props;

        this.setState({
            documents: documents,
            filterDocuments: documents,
            token: token
        });
    }
    componentDidMount() {
        this.setState({
            set_aside_data: [{
                    id: 'All',
                    name: 'Select Set Aside Status'
                },
                {
                    id: '8a',
                    name: '8(a)'
                },
                {
                    id: 'sdvosb',
                    name: 'SDVOSB'
                },
                
                {
                    id: 'wosb',
                    name: 'WOSB'
                },
                {
                    id: 'edwosb',
                    name: 'EDWOSB'
                },
                {
                    id: 'hubzone',
                    name: 'Indian Hub Zone'
                },
                {id: 'none', name: 'None'},
            ],
            fac_clear_data: [{
                    id: 'All',
                    name: 'Select Facility Clearance'
                },
                {
                    id: 'topsecret',
                    name: 'Top Secret'
                },
                {
                    id: 'secret',
                    name: 'Secret'
                },
                {id: 'none', name: 'None'}
            ]

        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            documents: nextProps.documents,
            filterDocuments: nextProps.documents
        });
    }

   


    deleteDocument(e, document) {
        const id = document.f_sol_number;
        const newId=parseInt(document.fileid)
        const token= this.props.token;
        debugger;
        if (window.confirm(`Do you want to delete file with Solicitation Number: ${id}`)) {
            fetch(Constants.restAPIServerName + `/api/file/delete/${newId}`, {
                method: 'POST',
                headers: new Headers({
                           'Content-Type': 'application/json',
                           'Authorization':     `Bearer ${token}` // <-- Specifying the Content-Type
                  }),
              })
                .then(res => {

                    this.props.fetchDocuments();
                }).catch((err) => {
                    console.log(err)
                })
        }

    }

    getFacList(e) {
        console.log(e.target.value);
        this.setState({
            facilityClear: e.target.value
        })
        this.listDocument();
    }
    getSetList(e) {
        console.log(e.target.value);
        this.setState({
            setStatus: e.target.value
        });
        this.setState(state => {

            if (state.setStatus !== 'All') {
                return {
                    documents: state.filterDocuments.filter(a =>
                        a.f_set_aside_status.indexOf(state.setStatus) >= 0
                    )
                }
            }

            return {
                documents: state.filterDocuments
            }
        })
    }

    listDocument() {

        this.setState(state => {
            if (state.facilityClear !== 'All') {
                let filterFac = [];
                for (let i = 0; i < state.filterDocuments.length; i++) {
                    if (state.filterDocuments[i].f_fac_clear === state.facilityClear) {
                        filterFac.push(state.filterDocuments[i]);
                    }
                }
                return {
                    documents: filterFac
                }
            }

            return {
                documents: state.filterDocuments
            }
        })
    }

    handleChange = event => {
        this.setState({
                searchInput: event.target.value
            }, () =>
            this.globalSearch()
        );
    };

    globalSearch = () => {
        let {
            searchInput
        } = this.state;
        let filteredData = this.state.filterDocuments.filter(value => {
            return (

                value.f_sol_number.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.f_con_title.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.f_set_aside_status.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.f_fac_clear.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.f_price.toLowerCase().includes(searchInput.toLowerCase())
            );
        });
        this.setState(state => {
            if ((filteredData.length > 0 && filteredData) || searchInput) {
                return {
                    documents: filteredData
                }
            } else {
                return {
                    documents: state.filter
                }
            }
        })
      
    };
   
    handleShowChange(e, d){   
        this.showModal(d);
        
    }
    showModal = (d) => {
        this.setState({
          modalShow: true,
          description: d.f_desc,
          title: d.f_con_title
        });
      };
  onHide(){
        this.setState({
            modalShow: false
        })
  }

    renderTableData(){
        const {error, pending} = this.props;
     
        if (error) {
          return <tr><td colSpan="6"  className="text-center"> Error{error.message}</td></tr>;
        }
    
        if (pending) {
          return <tr><td colSpan="6" className="text-center"><Spinner animation="border" /></td></tr>;
        } 
      
         return (
             <DisplayDoc documents={this.state.documents}   isadmin={this.props.isadmin} token={this.props.token} deleteDocument= {this.deleteDocument}  handleShowChange={this.handleShowChange.bind(this)}/>
            )
        
   
    
      }
     render() {
        const {isadmin}= this.props;

        const  { set_aside_data, fac_clear_data } = this.state;
        let setList = set_aside_data.length > 0
            && set_aside_data.map((item, i) => {
            return (
                <option key={i} value={item.id}>{item.name}</option>
            )
            }, this);
        
        let facList = fac_clear_data.length > 0
            && fac_clear_data.map((item, i) => {
                return (
                <option key={i} value={item.id}>{item.name}</option>
                )
            }, this);
  
        return (
           <div>
            <div className=" mb-4"> 
          
           <div className=" d-flex flex-wrap justify-content-between"> 
           
           <div className=""><h3 id='title' className="mb-3">Downloads</h3></div>

          <div className=" d-flex flex-wrap"> 
        <div className="">
           <select className="form-control" onChange={this.getSetList}>{setList}</select>
           </div>  
           <span className="ml-2 mr-2 d-flex align-items-center">OR</span>
        <div className="">
        <select className="form-control " onChange={this.getFacList}>{facList}</select>
        </div>
        <div className="ml-2">
            <input  type="search" className="form-control" placeholder="Search documents" value={this.state.searchInput || ""}
            onChange={this.handleChange}/>
        </div>
           
           </div>
           </div>
           </div>  
          
          <div className="table-responsive download-main"> <table id='downloads' className="table table-bordered">
              <thead className='thead-dark'><tr>
                <th>Solicitation Number</th>
                <th>Set Aside Status</th>
                <th>Facility Clearance</th>
                <th>File Title</th>
                <th>Price</th>
                {!isadmin ?   <th>Download</th>: null}
                {isadmin ?   <th>Delete</th>: null}
              </tr></thead>
                 <tbody>
                   
                 
                 {this.renderTableData()}
                 </tbody>
              </table>
               </div>
              
          <ViewModal show={this.state.modalShow}  onHide={this.onHide.bind(this)} description={this.state.description} title={this.state.title}/> 
           </div>
        )
     }
}


const mapStateToProps=(state)=>{

    return{
        error: state.documents.error,
        documents: state.documents.documents,
        pending: state.documents.pending,
        token: (state.auth.authUser==null) ? 'null': state.auth.authUser.token,
        isadmin: state.auth.isadmin,
        
    }
  }

  const mapDispatchToProps= (dispatch)=>{
    
    return{
       
        fetchDocuments:()=>{dispatch(fetchDocuments())}
    }
}
 
export default connect(
    mapStateToProps, mapDispatchToProps
)(DownloadsAll );