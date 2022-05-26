import React, {Component} from 'react'
import CommentForm from './CommentForm'
import LikeButton from '../../helpers/LikeButton' 
import { format } from 'date-fns'
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
                              <div className="bg-white text-black p-4 antialiased flex max-w-lg">
                                <img className="rounded-full h-8 w-8 mr-2 mt-1 " src="https://picsum.photos/id/1027/200/200" />
                                <div>
                                  <div className="bg-gray-100 rounded-3xl px-4 pt-2 pb-2.5">
                                    <div className="font-semibold text-sm leading-relaxed">Jon Doe</div>
                                    <div className="text-normal leading-snug md:leading-normal">{comment.body} world world</div>
                                  </div>

                                  <div className="flex justify-start items-center text-xs w-full">
                                    <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                                      <LikeButton post={comment} currentUser={this.props.currentUser} />

                                      {/*<a href="#" onClick={this.addLike} className="hover:underline">
                                                                              <small>Like</small>
                                                                            </a>*/}

                                      <small className="self-center">.</small>
                                      <small>{format(Date.parse(comment.created_at), "MMMM do")}</small>
                                    </div>
                                  </div>

                                  <div className="bg-white border border-white rounded-full float-right -mt-8 mr-0.5 flex shadow items-center">
                                    <svg className="p-0.5 h-5 w-5 rounded-full -ml-1.5 bg-white" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a2" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#FF6680" /><stop offset="100%" stopColor="#E61739" /></linearGradient><filter id="c2" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={1} /><feOffset dy={-1} in="shadowBlurInner1" result="shadowOffsetInner1" /><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2={-1} k3={1} operator="arithmetic" result="shadowInnerInner1" /><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0" /></filter><path id="b2" d="M8 0a8 8 0 100 16A8 8 0 008 0z" /></defs><g fill="none"><use fill="url(#a2)" xlinkHref="#b2" /><use fill="black" filter="url(#c2)" xlinkHref="#b2" /><path fill="white" d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41" /></g></svg>
                                    <span className="text-sm ml-1 pr-1.5 text-gray-500">3</span>
                                  </div>
                                </div>
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