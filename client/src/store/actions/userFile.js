


// action.js

export const MAP_DOCUMENT_PENDING = 'MAP_DOCUMENT_PENDING';
export const MAP_DOCUMENT_SUCCESS = 'MAP_DOCUMENT_SUCCESS';
export const MAP_DOCUMENT_ERROR = 'MAP_DOCUMENT_ERROR';

export const  mapDocumentPending=()=> {
    
    return {
        type: MAP_DOCUMENT_PENDING,
     
    }
}

export const  mapDocumentSuccess=(data)=> {
  
    return {
        type: MAP_DOCUMENT_SUCCESS,
        payload: data
    }
}

export const  mapDocumentError=(error) =>{
    return {
        type: MAP_DOCUMENT_ERROR,
        error: error
    }
}
