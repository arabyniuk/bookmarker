import React, {Component} from 'react'

class CommentsBookmark extends Component {
  render() {
    return(
        <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
          <div className="border-b px-4 py-2 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Comments</h3>
          </div>
          <div className="p-3">

    		<div x-data="{ open1: false, open2: false }">
    		  <div className="items-center">
    		    <div className="bg-white w-full sm:max-w-7xl md:w-1/3 h-auto shadow px-3 py-2 flex flex-col space-y-2">

    		      <div className="flex items-center space-x-2">
    		        <div className="group relative flex flex-shrink-0 self-start cursor-pointer">
    		          <img
    		           src="https://images.unsplash.com/photo-1507965613665-5fbb4cbb8399?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="h-8 w-8 object-fill rounded-full" />
    		        </div>

    		        <div className="flex items-center justify-center space-x-2">
    		          <div className="block">
    		              <div className="flex justify-center items-center space-x-2">
    		                <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
    		                <div className="font-medium">
    		                    <a href="#" className="hover:underline text-sm">
    		                    <small>Ganendra</small>
    		                    </a>
    		                </div>
    		                <div className="text-xs">
    		                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, maiores!
    		                </div>
    		                </div>
    		                <div className="self-stretch flex justify-center items-center transform transition-opacity duration-200 opacity-0 hover:opacity-100">
    		                    <a href="#" className="">
    		                        <div className="text-xs cursor-pointer flex h-6 w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
    		                        <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    		                        </div>
    		                    </a>
    		                </div>
    		              </div>
    		            <div className="flex justify-start items-center text-xs w-full">
    		              <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
    		                <a href="#" className="hover:underline">
    		                  <small>Like</small>
    		                </a>
    		               <small className="self-center">.</small>
    		                <a href="#" className="hover:underline">
    		                  <small>Reply</small>
    		                </a>
    		               <small className="self-center">.</small>
    		                <a href="#" className="hover:underline">
    		                  <small>15 hour</small>
    		                </a>
    		              </div>
    		            </div>

    		            <div className="flex items-center space-x-2 space-y-2">
    		              <div className="group relative flex flex-shrink-0 self-start cursor-pointer pt-2">
    		          <img
    		           src="https://images.unsplash.com/photo-1610156830615-2eb9732de349?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHJuU0tESHd3WVVrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="h-8 w-8 object-fill rounded-full" />
    		        </div>

    		              <div className="flex items-center justify-center space-x-2">
    		                <div className="block">
    		                  <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
    		                    <div className="font-medium">
    		                      <a href="#" className="hover:underline text-sm">
    		                        <small>Hasan Muhammad</small>
    		                      </a>
    		                    </div>
    		                    <div className="text-xs">
    		                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, maiores!
    		                    </div>
    		                  </div>
    		                  <div className="flex justify-start items-center text-xs w-full">
    		                    <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
    		                      <a href="#" className="hover:underline">
    		                        <small>Like</small>
    		                      </a>
    		                    <small className="self-center">.</small>
    		                      <a href="#" className="hover:underline">
    		                        <small>Reply</small>
    		                      </a>
    		                    <small className="self-center">.</small>
    		                      <a href="#" className="hover:underline">
    		                        <small>15 hour</small>
    		                      </a>
    		                    </div>
    		                  </div>
    		                </div>
    		              </div>

    		              <div className="self-stretch flex justify-center items-center transform transition-opacity duration-200 opacity-0 translate -translate-y-2 hover:opacity-100">
    		                <a href="#" className="">
    		                  <div className="text-xs cursor-pointer flex h-6 w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
    		                    <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    		                  </div>
    		                </a>
    		              </div>
    		            </div>
    		          </div>
    		        </div>
    		      </div>

    		      <div className="flex items-center space-x-2">
    		        <div className="flex flex-shrink-0 self-start cursor-pointer">
    		          <img src="https://images.unsplash.com/photo-1551122089-4e3e72477432?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cnVieXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="h-8 w-8 object-fill rounded-full" />
    		        </div>

    		        <div className="flex items-center justify-center space-x-2">
    		          <div className="block">
    		            <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
    		              <div className="font-medium">
    		                <a href="#" className="hover:underline text-sm">
    		                  <small>Nirmala</small>
    		                </a>
    		              </div>
    		              <div className="text-xs">
    		                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, maiores!
    		              </div>
    		            </div>
    		            <div className="flex justify-start items-center text-xs w-full">
    		              <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
    		                <a href="#" className="hover:underline">
    		                  <small>Like</small>
    		                </a>
    		               <small className="self-center">.</small>
    		                <a href="#" className="hover:underline">
    		                  <small>Reply</small>
    		                </a>
    		               <small className="self-center">.</small>
    		                <a href="#" className="hover:underline">
    		                  <small>15 hour</small>
    		                </a>
    		              </div>
    		            </div>
    		          </div>
    		        </div>

    		        <div className="self-stretch flex justify-center items-center transform transition-opacity duration-200 opacity-0 translate -translate-y-2 hover:opacity-100">
    		          <a href="#" className="">
    		            <div className="text-xs cursor-pointer flex h-6 w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
    		              <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    		            </div>
    		          </a>
    		        </div>
    		      </div>

    		      <div className="flex items-center space-x-2">
    		        <div className="flex flex-shrink-0 self-start cursor-pointer">
    		          <img src="https://images.unsplash.com/photo-1609349744982-0de6526d978b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="h-8 w-8 object-cover rounded-full" />
    		        </div>

    		        <div className="flex items-center justify-center space-x-2">
    		          <div className="block">
    		            <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
    		              <div className="font-medium">
    		                <a href="#" className="hover:underline text-sm">
    		                  <small>Arkadewi</small>
    		                </a>
    		              </div>
    		              <div className="text-xs">
    		                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, maiores!
    		              </div>
    		            </div>
    		            <div className="flex justify-start items-center text-xs w-full">
    		              <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
    		                <a href="#" className="hover:underline">
    		                  <small>Like</small>
    		                </a>
    		               <small className="self-center">.</small>
    		                <a href="#" className="hover:underline">
    		                  <small>Reply</small>
    		                </a>
    		               <small className="self-center">.</small>
    		                <a href="#" className="hover:underline">
    		                  <small>15 hour</small>
    		                </a>
    		              </div>
    		            </div>
    		          </div>
    		        </div>

    		        <div className="self-stretch flex justify-center items-center transform transition-opacity duration-200 opacity-0 translate -translate-y-2 hover:opacity-100">
    		          <a href="#" className="">
    		            <div className="text-xs cursor-pointer flex h-6 w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
    		              <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    		            </div>
    		          </a>
    		        </div>
    		      </div>
    		    </div>

    		  </div>
    		</div>
          </div>
          <div className="flex justify-end items-center w-100 border-t p-3">
            <button onClick={this.closeModal} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
          </div>
        </div>
    )
  }

}

export default CommentsBookmark
