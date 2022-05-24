class Api::V1::Bookmarks::CommentsController < Api::V1::CommentsController
  before_action :set_bookmark

  private

  def set_bookmark
    @bookmark = Bookmark.find(params[:bookmark_id])
  end
end
