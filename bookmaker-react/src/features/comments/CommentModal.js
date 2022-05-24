import React, {Component} from 'react'
import CommentForm from './CommentForm'
import './Modal.css';

class CommentModal extends Component {
  constructor(props) {
  	super(props)
  }

  render() {
  	const bookmark = this.props.bookmark
  	const showHideClassName = this.props.show ? "" : "hidden"
    const comments = bookmark.comments && [...bookmark.comments].sort((a,b) => b.created_at.localeCompare(a.created_at))

  	return(
        <div className="w-full h-full">
          <div id="modal-bg" onClick={this.props.handleClose} className={`w-full h-full bg-[#848A97] top-0 absolute ${showHideClassName}`}></div>
          <div id="modal-box" className={`sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-[#FFFFEB] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute ${showHideClassName}`}>
            <div className="h-screen flex justify-center items-center">
              <div className="bg-white rounded shadow-lg">
                <div className="border-b px-4 py-2 flex justify-between items-center">
                  <h3 className="font-semibold text-lg">Comments | {bookmark.title}</h3>
                </div>

                <CommentForm
                  commentAdd={this.props.commentAdd}
                  postError={this.props.postError}
                  currentUser={this.props.currentUser}
                  bookmark={this.props.bookmark}
                />

                <div className="p-3">
                  <div>
                    <div className="items-center">
                      <div className="bg-white h-auto shadow px-3 py-2 flex flex-col space-y-2">

                        {comments && comments.map(comment => (
                           <div key={comment.id} className="flex items-center space-x-2">
                              <div className="flex flex-shrink-0 self-start cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1551122089-4e3e72477432?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cnVieXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="h-8 w-8 object-fill rounded-full" />
                              </div>

                              <div className="flex items-center justify-center space-x-2">
                                <div className="block">
                                  <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                                    <div className="font-medium">
                                      <a href="#" className="hover:underline text-sm">
                                        <small>Nirmala</small>
                                      </a>
                                    </div>
                                    <div className="text-xs">
                                      {comment.body}
                                    </div>
                                  </div>
                                  <div className="flex justify-start items-center text-xs w-full">
                                    <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                                      <a href="#" className="hover:underline">
                                        <small>Like</small>
                                      </a>
                                     <small className="self-center">.</small>
                                      <a href="#" className="hover:underline">
                                        <small>Reply</small>
                                      </a>
                                     <small className="self-center">.</small>
                                      <a href="#" className="hover:underline">
                                        <small>15 hour</small>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="self-stretch flex justify-center items-center transform transition-opacity duration-200 opacity-0 translate -translate-y-2 hover:opacity-100">
                                <a href="#" className="">
                                  <div className="text-xs cursor-pointer flex h-6 w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
                                    <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                  </div>
                                </a>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  	  )
  }
}

export default CommentModal
