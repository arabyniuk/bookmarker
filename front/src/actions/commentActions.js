import { error } from "../helpers/notifications";
import { postBookmarkFailed } from "./bookmarkActions";

const DOMAIN = "http://0.0.0.0:3001"

const addComment = (comment) => {
  return {
  	type: 'ADD_COMMENT',
  	payload: comment
  }
}

export const commentAdd = (comment) => {
  return dispatch => {
  	const token = localStorage.token
  	if (token) {
  	  fetch(`${DOMAIN}/api/v1/bookmarks/${comment.bookmark_id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({comment: comment})
      })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          data.errors.map(msg => (
            error(msg)
          ))
          dispatch(postBookmarkFailed(data.errors))
        } else {
          dispatch(addComment(data.comment))
        }
      })
  	}
  }
}
