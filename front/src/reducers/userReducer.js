const initialState = {
  all: [],
  currentUser: {},
  errors: [],
  loading: true
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, currentUser: action.payload, errors: [] }
    case 'LOGOUT_USER':
      return {...state, currentUser: {} }
    case 'COMPLETE_LOADING_PROFILE':
      return {...state, loading: false}
    default:
      return state;
  }
}
