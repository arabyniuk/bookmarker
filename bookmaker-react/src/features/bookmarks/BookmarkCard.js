import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import LikeButton from '../../helpers/LikeButton'
import DeleteButton from '../../helpers/DeleteButton'

const BookmarkCard = ({bookmark, title, icon, showModal, currentUser, bookmarkDelete}) => {
  return(
    <tr className="text-gray-700">
      <td className="px-5 py-3 border">
        <div className="flex items-center text-sm">
          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
            <img className="object-cover w-full h-full rounded-full" src={`http://localhost:3000/${icon}`} alt="" loading="lazy" />
            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
          </div>
          <div>
            <p className="font-semibold text-black">{title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-3 text-sm border">{format(Date.parse(bookmark.created_at), "MMMM do, yyyy")}</td>
      <td className="px-5 py-3 text-sm border">
        <a href="" onClick={showModal}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        </a>

        <LikeButton post={bookmark} currentUser={currentUser} />

        <DeleteButton post={bookmark} bookmarkDelete={bookmarkDelete} />
      </td>
    </tr>
  )
}

export default BookmarkCard
