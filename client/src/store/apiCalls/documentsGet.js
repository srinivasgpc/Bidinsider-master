
// fetchDocuments.js
import * as Constants from "../../components/Common/Constants";

import {fetchDocumentsPending, fetchDocumentsSuccess, fetchDocumentsError} from '../actions/_actions';

const fetchDocuments = ()=> {
  
    return dispatch => {
        dispatch(fetchDocumentsPending());
        fetch(Constants.restAPIServerName+'/api/file/all',{ 
            method: 'GET'
        
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
          
            dispatch(fetchDocumentsSuccess(res));
            return res.documents;
        })
        .catch(error => {
            dispatch(fetchDocumentsError(error));
        })
    }
}

export default fetchDocuments;