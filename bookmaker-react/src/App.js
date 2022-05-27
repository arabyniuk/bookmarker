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
import { register, getProfile, logoutUser } from './actions/userActions'
import { fetchBookmarks } from './actions/bookmarkActions'

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
        <Router>
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
              <Login />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path='/registration'>
              <SignUp register={this.props.register} />
            </Route>
          </Switch>
        </Router>
        <Alert stack={ { limit: 3 } }/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBookmarks: (user) => dispatch(fetchBookmarks(user)),
  register: userInfo => dispatch(register(userInfo)),
  getProfile: () => dispatch(getProfile()),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)