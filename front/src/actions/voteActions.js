import { updateBookmark } from "./bookmarkActions";

const DOMAIN = "http://0.0.0.0:3001"

const deleteBookmarkVote = (vote) => {
  return {
  	type: 'DELETE_BOOKMARK_VOTE',
  	payload: vote
  }
}

const addCommentVote = (comment) => {
  return {
    type: 'ADD_COMMENT_VOTE',
    payload: comment
  }
}

const deleteCommentVote = (vote) => {
  return {
    type: 'DELETE_COMMENT_VOTE',
    payload: vote
  }
}

function urlForPost(post) {
	if (post.comments) {
      return `${DOMAIN}/api/v1/bookmarks/${post.id}/votes/`
	} else {
	  return `${DOMAIN}/api/v1/bookmarks/${post.bookmark_id}/comments/${post.id}/votes/`
	}
}

export const postVote = (post) => {
  return async dispatch => {
    const token = localStorage.token  
    if (token) {
      const data = await fetch(urlForPost(post), {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())

      if (data.bookmark) {
      	dispatch(updateBookmark(data.bookmark))
      } else if (data.comment) {
      	dispatch(addCommentVote(data.comment))
      }
    }
  }
}

export const deleteVote = (post, vote) => {
  return async dispatch => {
    const token = localStorage.token  
    if (token) {
      const data = await fetch(urlForPost(post), {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())

      if (data.bookmark) {
        dispatch(deleteBookmarkVote(vote))
      } else if (data.comment) {
      	dispatch(deleteCommentVote(vote))
      }
    }
  }
}
