import React from 'react'
import { Link } from 'react-router-dom'
import { format } from "date-fns"

const BookmarkCard = ({bookmark, title, icon}) => {
  const toggle = () => {
    const x = document.getElementById("id1");
    const y = document.getElementById("id2");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }

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
      <td className="px-5 py-3 text-xs border">
        <div id="id1" className="m-6" onClick={toggle} style={{display: 'none',cursor: 'pointer'}}>
          <div className="w-16 h-8 rounded-full flex items-center justify-items-start my-1 bg-gray-600">
            <div className="absolute w-6 h-6 ml-1 rounded-full bg-white"></div>
          </div>
        </div>

        <div id="id2" className="m-6" onClick={toggle} style={{cursor: 'pointer'}}>
          <div className="w-16 h-8 rounded-full flex items-center my-1" style={{backgroundColor: 'rgba(29, 78, 216)'}}>
            <div className="w-6 h-6 ml-auto mr-1 rounded-full bg-white"></div>
          </div>
        </div>
      </td>
      <td className="px-5 py-3 text-sm border">{format(Date.parse(bookmark.created_at), "MMMM do, yyyy")}</td>
      <td className="px-5 py-3 text-sm border">
        <Link to={`/commentsBookmark/${bookmark.id}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        </Link>
        <a href="">
          <svg className="w-6 h-6" fill="red" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </a>
        <a href="">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </a>
      </td>
    </tr>
  )
}

export default BookmarkCard
