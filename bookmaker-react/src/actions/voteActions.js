import { updateBookmark } from "./bookmarkActions"

const DOMAIN = "http://localhost:3000"

const deleteBookmarkVote = (vote) => {
  return {
  	type: 'DELETE_BOOKMARK_VOTE',
  	payload: vote
  }
}

export const postVote = (vote) => {
  return async dispatch => {
    const token = localStorage.token  
    if (token) {
      const data = await fetch(`${DOMAIN}/api/v1/bookmarks/${vote.bookmark_id}/votes`, {
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
      }
    }
  }
}

export const deleteVote = (vote) => {
  console.log(vote)
  return async dispatch => {
    const token = localStorage.token  
    if (token) {
      const data = await fetch(`${DOMAIN}/api/v1/bookmarks/${vote.votable_id}/votes/`, {
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
      }
    }
  }
}