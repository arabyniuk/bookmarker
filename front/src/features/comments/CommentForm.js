import React, { useState } from "react";
import RenderErrors from "../../helpers/RenderErrors";

const CommentForm = ({ currentUser, bookmark, commentAdd, postError }) => {
  const [comment, setComment] = useState({
    body: "",
    user_id: currentUser.id,
  });

  const handleInputChange = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    commentAdd({ ...comment, bookmark_id: bookmark.id });

    setComment({
      body: "",
    });
  };

  return (
    <div className="max-w-lg shadow-md items-center">
      <form onSubmit={handleSubmit} className="w-full p-4">
        <div className="mb-2">
          <label htmlFor="comment" className="text-lg text-gray-600">
            Add a comment
          </label>

          <textarea
            name="body"
            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            placeholder=""
            value={comment.body}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <RenderErrors errors={postError} />

        <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
