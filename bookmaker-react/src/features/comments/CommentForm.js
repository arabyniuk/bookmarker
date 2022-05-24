import React, {Component, useState} from 'react'
import { commentAdd } from '../../actions/commentActions'
import { error, success } from '../../helpers/notifications'
import RenderErrors from '../../helpers/RenderErrors'

class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: {
        body: '',
        user_id: props.currentUser.id
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = (event) => {
    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.commentAdd({...this.state.comment, bookmark_id: this.props.bookmark.id})
    
    this.setState({
      comment: {
        body : ''
      }
    });
  }

  render() {
    return(
      <div className="max-w-lg shadow-md items-center">
        <form onSubmit={this.handleSubmit} className="w-full p-4">
          <div className="mb-2">
            <label htmlFor="comment" className="text-lg text-gray-600">Add a comment</label>

            <textarea 
              name="body" 
              className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1" 
              placeholder=""
              value={this.state.comment.body}
              onChange={this.handleInputChange}
            ></textarea>
          </div>

          <RenderErrors errors={this.props.postError}/>

          <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">Comment</button>
        </form>
      </div>
    )
  }
}

export default CommentForm