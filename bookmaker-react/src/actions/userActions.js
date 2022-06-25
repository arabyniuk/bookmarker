const DOMAIN = "http://localhost:3000"

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})

const completeLoadingProfile = () => ({
  type: 'COMPLETE_LOADING_PROFILE'
})

export const register = (user) => {
  return dispatch => {
    return fetch(`${DOMAIN}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.errors) {
        console.log('errors')
      } else {
        localStorage.setItem('token', data.jwt)
        dispatch(loginUser(data.user))
      }
    })
  }
}

export const getProfile = () => {
  return async dispatch => {
    const token = localStorage.token
    if (token) {
      return fetch(`${DOMAIN}/api/v1/auto_login`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          localStorage.removeItem('token')
        } else {
          dispatch(loginUser(data.user))
        }
        dispatch(completeLoadingProfile())
      })
    } else {
      dispatch(completeLoadingProfile())
    }
  }
}

export const logoutUser = () => {
  return { type: 'LOGOUT_USER' }
}

export const login = (user) => {
  return async dispatch => {
     dispatch({ type: 'CREATING_OR_GETTING_USER' })
     const data = await fetch(`${DOMAIN}/api/v1/login`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
       },
       body: JSON.stringify(user)
     })
     .then(resp => resp.json())
     .then(data => {
       if (data.errors) {
         console.log('errors')
       } else {
         localStorage.setItem('token', data.jwt)
         dispatch(loginUser(data.user))
       }
     })

  }
}
