const initialState = {
    all: [],
    currentUser: {},
    errors: []
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, currentUser: action.payload, errors: [] }
    default:
      return state;
  }
}
