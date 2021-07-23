import {uploadDocumentPending, uploadDocumentSuccess, uploadDocumentError} from '../actions/projectActions';
import * as Constants from "../../components/Common/Constants";
const  uploadDocuments=(data)=> {
    debugger;
    return dispatch => {
        dispatch(uploadDocumentPending());
     
      fetch(Constants.restAPIServerName+'/api/file/create', {
        method: 'POST',
        body: data
      })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        dispatch(uploadDocumentSuccess(data));
      })
      .catch(error => {
        // console.error(error);
        dispatch(uploadDocumentError(error));
      })
        
    }
}

export default uploadDocuments;