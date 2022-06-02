import React, {Component} from 'react'
import { useHistory } from 'react-router-dom'

const ParseBookmark = ({bookmarkAdd, currentUser}) => {
  let history = useHistory()

  const handlePathname = () => {
  	try {
      const url = new URL(window.location.pathname)
      this.props.bookmarkAdd({user: this.props.currentUser, bookmark: {bookmark: {link: url.href}}})
    } catch (e) {
      history.push("/", { error_msg: 'Path is wrong!' })
    }
  }

  return(
  	<div>
  	  {handlePathname()}
  	</div>
  )
}

export default ParseBookmark