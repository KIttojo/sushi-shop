const defaultState = {
  products: [],
}

export const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state, 
        products: state.products.push(action.payload),
      }

    // case 'REMOVE_PRODUCT':
    //   return {
    //     ...state, 
    //     products: state.cash - action.payload,
    //   }
  
    default:
      return state;
  }
}