const initialState = {
  bookmarks: [],
  loading: false,
  submitting: false,
  error: []
}

export const bookmarksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKMARKS_PENDING':
      return {
        ...state,
        bookmarks: [...state.bookmarks],
        loading: true,
        error: []
      }
    case 'FETCH_BOOKMARKS_FULFILLED':
      return {
        ...state,
        bookmarks: [...state.bookmarks, ...action.payload],
        loading: false,
        error: []
      }
    case 'ADD_BOOKMARK':
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
        submitting: false,
        error: []
      }
    case 'ADD_BOOKMARK_PENDING':
      return {
        ...state,
        bookmarks: [...state.bookmarks],
        submitting: true
      }
    case 'ADD_BOOKMARK_FAILED':
      return {
        ...state,
        bookmarks: [...state.bookmarks],
        submitting: false,
        error: [...state.error, action.payload]
      }
    case 'ADD_COMMENT':
      const newBookmarks = state.bookmarks.map(bookmark => {
        if (bookmark.id === action.payload.bookmark_id) {
          bookmark.comments = bookmark.comments.concat(action.payload)
          return bookmark;
        } else {
          return bookmark;
        }
      })
      return {
        ...state,
        bookmarks: newBookmarks
      }
    case 'UPDATE_BOOKMARK':
      const newBookmarkList = state.bookmarks.map(bookmark => (
        bookmark.id === action.payload.id ? action.payload : bookmark
      ))
      return {...state, bookmarks: newBookmarkList } 
    case 'DELETE_BOOKMARK_VOTE':
      return {
        ...state,
        bookmarks: state.bookmarks.map(bookmark => {
          bookmark.votes = bookmark.votes.filter(vote => vote.id !== action.payload.id)
          return bookmark;
        })
      }
    case 'DELETE_COMMENT_VOTE':
      return {
        ...state,
        bookmarks: state.bookmarks.map(bookmark => {
          bookmark.comments = bookmark.comments.map(comment => {
            comment.votes = comment.votes.filter(vote => vote.id !== action.payload.id);
            return comment;
          })
          return bookmark;
        })
      }
    case 'ADD_COMMENT_VOTE':
      const newBookmarksList = state.bookmarks.map(bookmark => {
        if (bookmark.id === action.payload.bookmark_id) {
          bookmark.comments = bookmark.comments.map(comment => {
            if (comment.id === action.payload.id) {
              comment = action.payload
              return comment
            } else { return comment }
          })
          return bookmark
        } else {
          return bookmark
        }
      })

      return {...state, bookmarks: newBookmarksList}
    case 'DELETE_BOOKMARK':
      return {
        ...state,
        bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.payload)
      }
    default:
      return state;
  }
}
