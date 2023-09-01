class Api::V1::Bookmarks::Comments::VotesController < Api::V1::VotesController
  before_action :set_voteable

  private

  def set_voteable
    @bookmark = Bookmark.find(params[:bookmark_id])
    @voteable = @bookmark.comments.find(params[:comment_id])
  end
end
