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
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser,
    authErrors: state.users.errors
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBookmarks: (user) => dispatch(fetchBookmarks(user)),
  register: userInfo => dispatch(register(userInfo)),
  getProfile: () => dispatch(getProfile()),
  logoutUser: () => dispatch(logoutUser()),
  login: (userInfo) => dispatch(login(userInfo)),
  bookmarkAdd: (obj) => dispatch(bookmarkAdd(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)