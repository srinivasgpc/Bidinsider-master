



  const loadCartItems= localStorage.getItem('cartItems') ;

let loadTotal=0;
let hasCart= false;
if(loadCartItems !== null && loadCartItems !== ""){
	hasCart= true;
    if(JSON.parse(loadCartItems).length>0){
    loadTotal= calculateSum(JSON.parse(loadCartItems), 'f_price');
}
}
  
const initialState = {
    cartItems: hasCart ? JSON.parse(loadCartItems): [],
    totalAmount: loadTotal,
    cartLength: hasCart ?  JSON.parse(loadCartItems).length: 0
   
}

export default function cartReducer(state = initialState, action) {
         const cartItems= state.cartItems;
         const document= action.payload;
    switch(action.type) {
        
        case 'ADD_TO_CART': 
      
            let docAlreadyInCart= false;
        
            cartItems.forEach(item=>{
                    if(item.fileid=== document.fileid){
                        docAlreadyInCart= true;
                        alert("Document already in cart");
                      
                    }
            })
            if(!docAlreadyInCart){
                cartItems.push({...document, count:1});
                
            }
    
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
           const totalAdd= calculateSum(cartItems, 'f_price');
           localStorage.setItem('totalAmount', totalAdd);
           localStorage.setItem('cartLength', cartItems.length);
            return {
                ...state,
                 cartItems: cartItems,
                 totalAmount: totalAdd,
                 cartLength: cartItems.length
            };
     
        case 'REMOVE_TO_CART':
   
            const cartItemsNew= state.cartItems.filter(elem=> elem.fileid !== document.fileid);
            const total= calculateSum(cartItemsNew, 'f_price')
             localStorage.setItem('cartItems', JSON.stringify(cartItemsNew));
           localStorage.setItem('totalAmount', total);
           localStorage.setItem('cartLength', cartItems.length);
       
            return {
                ...state,
                cartItems: cartItemsNew,
                totalAmount: total,
                cartLength: cartItemsNew.length
            }
       case 'CLEAR_CART':
       localStorage.setItem('cartItems', []);
       localStorage.setItem('totalAmount', 0);
       localStorage.setItem('cartLength', 0);
       debugger;
            return {
                ...state,
                cartItems: [],
                totalAmount: 0,
                cartLength: 0
            }
        default: 
            return state;
    }
}



function calculateSum(cartItems, field){

    let total=0;
    for(let i=0; i<cartItems.length; i++){
        total = total + parseFloat(cartItems[i][field])
    }
    return total;
}