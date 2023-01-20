import React,{createContext,useReducer} from 'react';


const initialState ={
    selectedItems : [],
    itemscounter : 0,
    total : 0,
    checkOut : false
}

const sumItems = items =>{
  const itemscounter = items.reduce((total,product) => total +  product.quantity,0);
  const total = items.reduce((total,product) => total + product.price*product.quantity,0).toFixed(2);
  return{itemscounter , total}
}


const cartReducer = (state , action) =>{
  console.log(state)
    switch(action.type){
      case "ADD_ITEM":
        if(!state.selectedItems.find(item => item.id === action.payload.id)){
          state.selectedItems.push({
            ...action.payload,
            quantity:1
          })
        }
        return{
          ...state,
          selectedItems : [...state.selectedItems],
          ...sumItems(state.selectedItems),
          checkOut : false
        }

        case "REMOVE_ITEM" :
          const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id)
          return{
            ...state,
            selectedItems : [...newSelectedItem],
            ...sumItems(newSelectedItem)
          }

        case "INCREASE" :
          const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
          state.selectedItems[indexI].quantity++;
          return{
            ...state,
            ...sumItems(state.selectedItems)
          }

        case "DECREASE" :
          const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
          state.selectedItems[indexD].quantity--;
          return{
            ...state,
            ...sumItems(state.selectedItems)
          } 

         case "CHECKOUT" :
          return{
            selectedItems : [],
            itemscounter : 0,
            totale : 0,
            checkOut : true
          }

          case "CLEAR" :
            return{
              selectedItems : [],
              itemscounter : 0,
              totale : 0,
              checkOut : false
            }
          default:
            return state;
      }

}


export const CartContex = createContext()

const CartContexProvider = ({children}) => {

    const [state,dispatch] = useReducer(cartReducer,initialState)

  return (
    <CartContex.Provider value={{state , dispatch}}>
      {children}
    </CartContex.Provider>
  )
}
 export default CartContexProvider;