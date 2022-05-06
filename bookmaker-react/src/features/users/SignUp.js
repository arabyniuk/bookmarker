import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        name: '',
        password: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.setState({
      ...this.state
    })
    await this.props.register({user: this.state.user})
    this.props.history.push('/')
    //if (this.props.authErrors.length === 0) {
    //  this.props.history.push('/')
    //}
  }

  render() {
    const {user} = this.state
    const canSave = [user.email, user.name, user.password].every(Boolean)
    return(
      <main className="px-16 py-6">
        <div className="grid grid-cols-1 gap-3">
          <div className="code-preview-wrapper">
            <div className="rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6 dark:bg-gray-800">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="mail@email.com"
                    onChange={this.handleInputChange}
                    value={user.email}
                    required
                  />
                  {!canSave? <small className="font-medium tracking-wide text-red-500">Email is required</small>: null}
                </div>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    onChange={this.handleInputChange}
                    value={user.name}
                    required
                  />
                  {!canSave? <small className="font-medium tracking-wide text-red-500">Name is required</small>: null}
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    onChange={this.handleInputChange}
                    value={user.password}
                    required
                  />
                  {!canSave? <small className="font-medium tracking-wide text-red-500">Password is required</small>: null}
                </div>

                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </div>
                  <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>

                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default withRouter(SignUp);
