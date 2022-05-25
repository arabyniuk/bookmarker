import { Fragment } from 'react'
import ReactTooltip from 'react-tooltip'
import { useDispatch } from 'react-redux'
import { deleteVote, postVote } from '../actions/voteActions'

export default function LikeButton({post, currentUser}) {
  const dispatch = useDispatch()
  const voted = post.votes.find(vote => vote.user_id === currentUser.id)

  function addLike(e) {
  	e.preventDefault()
    if (voted) {
      dispatch(deleteVote(voted))
    } else {
  	  dispatch(postVote({bookmark_id: post.id}))	
    }
  }

  return(
  	<Fragment>
		<a href="" onClick={addLike}>
		  <svg className="w-6 h-6" fill={`${voted? "red" : "gray" }`} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
		</a>
  	</Fragment>
  )
}