import React, {Component} from 'react'
import { useHistory } from 'react-router-dom'

const ParseBookmark = ({bookmarkAdd, currentUser}) => {
  let history = useHistory()

  const handlePathname = () => {
  	try {
      const url = new URL(window.location.pathname.substring(1))
      bookmarkAdd({user: currentUser, bookmark: {link: url.href}})
      history.push("/")
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
