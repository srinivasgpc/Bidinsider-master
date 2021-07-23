
// reducer.js

import {FETCH_DOCUMENTS_PENDING, FETCH_DOCUMENTS_SUCCESS, FETCH_DOCUMENTS_ERROR} from '../actions/_actions';

const initialState = {
    pending: false,
    documents: [],
    error: null
}

export default function documentsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DOCUMENTS_PENDING: 
            return {
                ...state,
                pending: true,
                error:null
            }
        case FETCH_DOCUMENTS_SUCCESS:
       
            return {
                ...state,
                pending: false,
                documents: action.payload.documents
            }
        case FETCH_DOCUMENTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
                items: []
            }
        default: 
            return state;
    }
}

