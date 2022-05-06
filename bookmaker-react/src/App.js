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
import CommentsBookmark from './features/bookmarks/CommentsBookmark'
import { register, getProfile } from './actions/userActions'

class App extends Component {
  componentDidMount = () => {
    this.props.getProfile()
  }

  render() {
    return(
      <div>
        <Router>
          <Header currentUser={this.props.currentUser} />
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
            <Route exact path="/commentsBookmark/:bookmarkId">
              <CommentsBookmark />
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
  register: userInfo => dispatch(register(userInfo)),
  getProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
