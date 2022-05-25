import { error, success, warning } from "../helpers/notifications"
import { reset, reduxForm } from "redux-form";

const DOMAIN = "http://localhost:3000"

const addBookmark = (bookmark) => {
  return {
    type: 'ADD_BOOKMARK',
    payload: bookmark
  }
}

export const postBookmarkFailed = (errors) => {
  return {
    type: 'ADD_BOOKMARK_FAILED',
    payload: errors
  }
}

export const updateBookmark = (bookmark) => {
  return {
    type: 'UPDATE_BOOKMARK',
    payload: bookmark
  }
}

export const fetchBookmarks = (user) => {
  return async dispatch => {
    const token = localStorage.token
    if (token) {
      dispatch({ type: 'FETCH_BOOKMARKS_PENDING' })
      fetch(`${DOMAIN}/api/v1/users/${user.id}/bookmarks`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json()).then(bookmarks => {
        dispatch({ type: 'FETCH_BOOKMARKS_FULFILLED', payload: bookmarks.bookmarks })
      })
    }
  }
}

export const bookmarkAdd = ({user, bookmark}) => {
  return async dispatch => {
    const token = localStorage.token
    if (token) {
      dispatch({ type: 'ADD_BOOKMARK_PENDING' })
      fetch(`${DOMAIN}/api/v1/users/${user.id}/bookmarks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({bookmark: bookmark})
      })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          data.errors.map(msg => (
            error(msg)
          ))
          dispatch(postBookmarkFailed(data.errors))
        } else {
          dispatch(addBookmark(data.bookmark))
        }
      })
    }
  }
}
