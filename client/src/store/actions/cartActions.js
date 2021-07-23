
 export const addDocument=(document)=>{

    return {
        type: 'ADD_TO_CART',
        payload: document
    }
 }  

 export const removeCart=(document)=>{
    return {
        type: 'REMOVE_TO_CART',
        payload: document
    }
 } 

 export const clearCart=()=>{
     debugger;
    return {
        type: 'CLEAR_CART',
        
    }
 } 