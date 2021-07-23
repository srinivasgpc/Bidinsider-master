import {MAP_DOCUMENT_PENDING, MAP_DOCUMENT_SUCCESS, MAP_DOCUMENT_ERROR} from '../actions/userFile';

const initialState = {
    pending: false,
    document: null,
    error: null
}

export default function documentsReducer(state = initialState, action) {
    switch(action.type) {
        case MAP_DOCUMENT_PENDING: 
       
            return {
                ...state,
                pending: true
            }
        case MAP_DOCUMENT_SUCCESS:
        console.log(action);
            return {
                ...state,
                pending: false,
                document: action.payload
            }
        case MAP_DOCUMENT_ERROR:
     
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
