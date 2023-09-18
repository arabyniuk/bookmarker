import React from "react";
import CommentForm from "./CommentForm";
import LikeButton from "../../helpers/LikeButton";
import { format } from "date-fns";
import "./Modal.css";

const CommentModal = ({
  show,
  handleClose,
  commentAdd,
  postError,
  currentUser,
  bookmark,
}) => {
  const comments = bookmark.comments && [...bookmark.comments].sort((a, b) => b.created_at.localeCompare(a.created_at));

  return (
    <div className={`w-full h-full ${show ? "" : "hidden"}`}>
      <div id="modal-bg" onClick={handleClose} className={`w-full h-full bg-[#848A97] top-0 absolute ${show ? "" : "hidden"}`}></div>
      <div id="modal-box" className={`sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-[#FFFFEB] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute ${show ? "" : "hidden"}`}>
        <div className="h-screen flex justify-center items-center">
          <div className="bg-white rounded shadow-lg">
            <div className="border-b px-4 py-2 flex justify-between items-center">
              <h3 className="font-semibold text-lg">Comments | {bookmark.title}</h3>
            </div>

            <CommentForm
              commentAdd={commentAdd}
              postError={postError}
              currentUser={currentUser}
              bookmark={bookmark}
            />

            <div className="p-3">
              <div>
                <div className="items-center">
                  <div className="bg-white h-auto shadow px-3 py-2 flex flex-col space-y-2">

                    {comments && comments.map(comment => (
                      <div key={comment.id} className="flex items-center space-x-2">
                        <div className="bg-white text-black p-4 antialiased flex max-w-lg">
                          <img className="h-full w-full object-cover" src={`https://eu.ui-avatars.com/api/?name=${comment.name}&size=16`} alt="avatar" style={{ 'borderRadius': '50%' }} />
                          <div>
                            <div className="bg-gray-100 rounded-3xl px-4 pt-2 pb-2.5">
                              <div className="font-semibold text-sm leading-relaxed">{comment.name}</div>
                              <div className="text-normal leading-snug md:leading-normal">{comment.body}</div>
                            </div>

                            <div className="flex justify-start items-center text-xs w-full">
                              <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                                <LikeButton post={comment} currentUser={currentUser} />
                                <small className="self-center">.</small>
                                <small>{format(Date.parse(comment.created_at), "MMMM do")}</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
