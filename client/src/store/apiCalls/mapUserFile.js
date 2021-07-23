import {mapDocumentPending, mapDocumentSuccess, mapDocumentError} from '../actions/userFile';
import * as Constants from "../../components/Common/Constants";
const  mapUserFile=(data, token)=> {
  
    return dispatch => {
        dispatch(mapDocumentPending());
     
      fetch(Constants.restAPIServerName+'/api/file/addFileToUser', {
       
        method: 'POST',
        headers: new Headers({
                   'Content-Type': 'application/json',
                   'Authorization':     `Bearer ${token}` // <-- Specifying the Content-Type
          }),
          body:  JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch(mapDocumentSuccess(data));
      })
      .catch(error => {
        // console.error(error);
        dispatch(mapDocumentError(error));
      })
        
    }
}

export default mapUserFile;