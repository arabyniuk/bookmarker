import React, { useState } from 'react';

const BookmarkAdd = ({ currentUser, bookmarkAdd, bookmarkSubmitting }) => {
  const [bookmark, setBookmark] = useState({ link: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookmark({ ...bookmark, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    bookmarkAdd({ user: currentUser, bookmark });

    setBookmark({ link: '' });
  };

  return (
    <div className="container flex mb-10 items-center">
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
          </div>
          <input
            name="link"
            type="text"
            value={bookmark.link}
            onChange={handleInputChange}
            className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Put link here.."
            readOnly={bookmarkSubmitting ? true : false}
          />
          <div className="absolute top-2 right-2">
            <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">
              {bookmarkSubmitting ? '...' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookmarkAdd;
