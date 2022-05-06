import React, {Component} from 'react'

class BookmarkAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bookmark: {
        link: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = (event) => {
    this.setState({
      ...this.state,
      bookmark: {
        ...this.state.bookmark,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.bookmarkAdd({user: this.props.currentUser, bookmark: this.state.bookmark})

    this.setState({
      bookmark: {
        link : ''
      }
    });
  }

  render() {
    //console.log(this.props.bookmarkError.length)
    //if (!this.props.bookmarkSubmitting? && )
    //  console.log('true')
    //  :

    //if (this.props.bookmarkSubmitting?) {
    //  this.setState({
    //    bookmark: {
    //      link : ''
    //    }
    //  });
    //}

    return(
      <div className="container flex mb-10 items-center">
        <div className="relative">
          <form onSubmit={this.handleSubmit}>
            <div className="absolute top-4 left-3">
              <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
            <input
              name="link"
              type="text"
              value={this.state.bookmark.link}
              onChange={this.handleInputChange}
              className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
              placeholder="Put link here.."
              readOnly={this.props.bookmarkSubmitting? true : false}
            />
            <div className="absolute top-2 right-2">
              <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">{this.props.bookmarkSubmitting? '...' : 'Add'}</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default BookmarkAdd
