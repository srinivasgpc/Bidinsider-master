// action.js

export const FETCH_DOCUMENTS_PENDING = 'FETCH_DOCUMENTS_PENDING';
export const FETCH_DOCUMENTS_SUCCESS = 'FETCH_DOCUMENTS_SUCCESS';
export const FETCH_DOCUMENTS_ERROR = 'FETCH_DOCUMENTS_ERROR';

export const  fetchDocumentsPending=()=> {
    return {
        type: FETCH_DOCUMENTS_PENDING,
     
    }
}

export const  fetchDocumentsSuccess=(documents)=> {
  
    return {
        type: FETCH_DOCUMENTS_SUCCESS,
        payload: {documents}
    }
}

export const  fetchDocumentsError=(error) =>{
    return {
        type: FETCH_DOCUMENTS_ERROR,
        payload: { error }
    }
}
