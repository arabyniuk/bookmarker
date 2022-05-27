import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <header>
        <nav className="container flex justify-between px-4 py-8 mx-auto">
          <div className="flex items-center">
            <Link
              className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
              to="/"
            >
              Bookmarks
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            {this.props.currentUser.email?
              <Fragment>
                <Link
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  to="profile"
                >
                  Profile
                </Link>
                <Link
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  to="/"
                  onClick={() => {
                    this.props.logoutUser()
                  }}
                >
                  Sign Out
                </Link>
              </Fragment>
              :
              <Fragment>
                <Link
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  to="login"
                >
                  Sign in
                </Link>
                <Link
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                  to="registration">
                  Sign up
                </Link>
              </Fragment>
            }
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
