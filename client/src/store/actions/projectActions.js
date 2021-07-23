

// action.js

export const UPLOAD_DOCUMENT_PENDING = 'UPLOAD_DOCUMENT_PENDING';
export const UPLOAD_DOCUMENT_SUCCESS = 'UPLOAD_DOCUMENT_SUCCESS';
export const UPLOAD_DOCUMENT_ERROR = 'UPLOAD_DOCUMENT_ERROR';

export const  uploadDocumentPending=()=> {
    
    return {
        type: UPLOAD_DOCUMENT_PENDING,
     
    }
}

export const  uploadDocumentSuccess=(data)=> {
  
    return {
        type: UPLOAD_DOCUMENT_SUCCESS,
        payload: data
    }
}

export const  uploadDocumentError=(error) =>{
    return {
        type: UPLOAD_DOCUMENT_ERROR,
        error: error
    }
}
