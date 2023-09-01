import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "../reducers/userReducer";
import { bookmarksReducer } from "../reducers/bookmarksReducer";

const rootReducer = combineReducers({
  users: userReducer,
  bookmarks: bookmarksReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
