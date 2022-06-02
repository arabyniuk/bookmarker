import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  toggleDropdown = () => {
    let headerMenuDropdown = document.getElementById('header-menu-dropdown')

    if (headerMenuDropdown.classList.contains('hidden')) {
      headerMenuDropdown.classList.remove('hidden')
    } else {
      headerMenuDropdown.classList.add('hidden')
    }
  }

  render() {
    return(
      <header>
        <nav className="container flex justify-between px-4 py-8 mx-auto">
          <div className="flex items-center">
            <Link to="/" >
              <img src="https://img.icons8.com/cute-clipart/64/undefined/b.png"/>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            {this.props.currentUser.email?
              <Fragment>
                <div className="flex justify-center">
                  <div className="relative">
                    <button className="block h-12 w-12 rounded-full overflow-hidden focus:outline-none" onClick={this.toggleDropdown}>
                      <img className="h-full w-full object-cover" src={`https://eu.ui-avatars.com/api/?name=${this.props.currentUser.name}&size=1000`} alt="avatar" />
                    </button>
                    <div id="header-menu-dropdown" className="absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl hidden"> 

                      <Link to='profile' className='transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white'>Settings</Link>

                      <div className="py-2">
                        <hr></hr>
                      </div>

                      <Link 
                        className='transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white' 
                        to='/'
                        onClick={() => {
                          this.props.logoutUser()
                        }}
                      >Logout</Link>
                    </div>
                  </div>
                </div>
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
