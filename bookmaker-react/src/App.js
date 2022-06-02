import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Alert, success } from './helpers/notifications'
import Home from './app/Home'
import Header from './app/Header'
import Login from './features/users/Login'
import SignUp from './features/users/SignUp'
import Profile from './features/users/Profile'
import BookmarksList from './features/bookmarks/BookmarksList'
import ParseBookmark from './features/bookmarks/ParseBookmark'
import { register, login, getProfile, logoutUser } from './actions/userActions'
import { fetchBookmarks, bookmarkAdd } from './actions/bookmarkActions'
import ShowAlert from './helpers/ShowAlert'

class App extends Component {
  componentDidMount = () => {
    this.props.getProfile()
    if (this.props.currentUser){
      this.props.fetchBookmarks(this.props.currentUser)
    }
  }

  logout = () => {
    localStorage.removeItem('token')
    this.props.logoutUser()
    success('Successfully logged out!')
  }

  render() {
    return(
      <div>
        {this.props.loading?
          <div className="z-50 static flex fixed left-0 top-0 bottom-0 w-full bg-gray-400 bg-opacity-50">
            <img src="https://paladins-draft.com/img/circle_loading.gif" width="64" height="64" className="m-auto mt-1/4" />
          </div>
        :
          <div>
            <Header currentUser={this.props.currentUser} logoutUser={this.logout} />
            <Switch>
              <Route exact path="/">
                {this.props.currentUser.email?
                  <BookmarksList />
                  :
                  <Home />
                }
              </Route>
              <Route exact path="/login">
                <Login login={this.props.login} authErrors={this.props.authErrors}/>
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path='/registration'>
                <SignUp register={this.props.register} />
              </Route>
              <Route>
                <ParseBookmark bookmarkAdd={this.props.bookmarkAdd} currentUser={this.props.currentUser} />
              </Route>
            </Switch>
            <Alert stack={ { limit: 3 } }/>
            <ShowAlert />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authErrors: state.users.errors,
    currentUser: state.users.currentUser,
    loading: state.users.loading
  }
}

const mapDispatchToProps = dispatch => ({
  bookmarkAdd: (obj) => dispatch(bookmarkAdd(obj)),
  getProfile: () => dispatch(getProfile()),
  fetchBookmarks: (user) => dispatch(fetchBookmarks(user)),
  register: userInfo => dispatch(register(userInfo)),
  logoutUser: () => dispatch(logoutUser()),
  login: (userInfo) => dispatch(login(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)