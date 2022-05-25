import React, { Component, useEffect, useState } from 'react'
import BookmarkCard from './BookmarkCard'
import BookmarkAdd from './BookmarkAdd'
import { fetchBookmarks, bookmarkAdd } from '../../actions/bookmarkActions'
import { commentAdd } from '../../actions/commentActions'
import { connect } from 'react-redux'
import CommentModal from '../comments/CommentModal'

class BookmarksList extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      bookmark: {
        title: ''
      }
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal = (event, bookmark) => {
    event.preventDefault()

    this.setState({
      bookmark,
      show: true })
  }

  hideModal = (event) => {
    event.preventDefault()
    console.log('close')
    this.setState({ show: false })
  }

  //componentDidMount = () => {
  //  console.log('---time---')
  //  this.props.fetchBookmarks(this.props.currentUser)
  //}

  render() {
    const list = [...this.props.bookmarks].sort((a,b) => b.created_at.localeCompare(a.created_at))

    return(
      <div>
        <div className="px-16 py-6">
          {this.props.loading?
             <div className="z-50 static flex fixed left-0 top-0 bottom-0 w-full bg-gray-400 bg-opacity-50">
               <img src="https://paladins-draft.com/img/circle_loading.gif" width="64" height="64" className="m-auto mt-1/4" />
             </div>
           :
            <section className="container mx-auto font-mono">
              <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                  <BookmarkAdd
                    currentUser={this.props.currentUser}
                    bookmarkAdd={this.props.bookmarkAdd}
                    bookmarkError={this.props.bookmarkError}
                    bookmarkSubmitting={this.props.bookmarkSubmitting}
                  />

                  <table className="w-full">
                    <tbody className="bg-white">
                      {list.map(bookmark => (
                        <BookmarkCard 
                          key={bookmark.id} 
                          bookmark={bookmark} 
                          title={bookmark.title.substring(0, 70) + ' ...'} 
                          icon={bookmark.icon}
                          currentUser={this.props.currentUser}
                          showModal={(event) => this.showModal(event, bookmark)}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          }
        </div>
        <CommentModal
          show={this.state.show} 
          handleClose={this.hideModal}
          commentAdd={this.props.commentAdd}
          postError={this.props.bookmarkError}
          currentUser={this.props.currentUser}
          bookmark={this.state.bookmark}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bookmarkError: state.bookmarks.error,
    bookmarkSubmitting: state.bookmarks.submitting,
    currentUser: state.users.currentUser,
    bookmarks: state.bookmarks.bookmarks,
    loading: state.bookmarks.loading
  }
}

const mapDispatchToProps = dispatch => ({
  commentAdd: (comment) => dispatch(commentAdd(comment)),
  fetchBookmarks: (user) => dispatch(fetchBookmarks(user)),
  bookmarkAdd: (obj) => dispatch(bookmarkAdd(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookmarksList)