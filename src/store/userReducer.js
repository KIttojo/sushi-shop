const defaultState = {
  name: '',
  phone: '',
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      const { name, phone } = action.payload;
      return {
        ...state, 
        name : name,
        phone : phone,
      }

    default:
      return state;
  }
}