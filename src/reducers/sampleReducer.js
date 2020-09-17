
const INITIAL_STATE = {
  login:''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PRODUCT-LIST':
      return Object.assign({}, state, { productList: action.payload })
      
    default:
      return INITIAL_STATE
  }
}
