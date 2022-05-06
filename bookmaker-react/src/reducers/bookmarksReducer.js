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
        bookmarks: state.bookmarks.concat(action.payload),
        loading: false,
        error: []
      }
    case 'ADD_BOOKMARK':
      return {
        ...state,
        bookmarks: state.bookmarks.concat(action.payload),
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
        error: state.error.concat(action.payload)
      }
    default:
      return state
  }
}
