class Api::V1::Bookmarks::VotesController < Api::V1::VotesController
  before_action :set_bookmark

  private

  def set_bookmark
    @bookmark = Bookmark.find(params[:bookmark_id])
  end
end
