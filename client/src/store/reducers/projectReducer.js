import {UPLOAD_DOCUMENT_PENDING, UPLOAD_DOCUMENT_SUCCESS, UPLOAD_DOCUMENT_ERROR} from '../actions/projectActions';

const initialState = {
    pending: false,
    document: null,
    error: null
}

export default function documentsReducer(state = initialState, action) {
    switch(action.type) {
        case UPLOAD_DOCUMENT_PENDING: 
       
            return {
                ...state,
                pending: true
            }
        case UPLOAD_DOCUMENT_SUCCESS:
        console.log(action);
            return {
                ...state,
                pending: false,
                document: action.payload
            }
        case UPLOAD_DOCUMENT_ERROR:
     
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
