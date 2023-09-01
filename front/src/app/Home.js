import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <main className="px-16 py-6">
        <div className="grid grid-cols-1 gap-3">
          <h2 className="lock mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">It just works... everywhere122</h2>
          <p className="lock mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">No need to install any extensions, apps or software. Just type "bookmarks.io" in front of any URL in your browsers address bar to save a bookmark. It works on desktop and mobile devices</p>
          <Link
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded text-center"
              to="/bookmarks"
          >
            Bookmarks
          </Link>
        </div>
      </main>

    )
  }
}

export default Home;
