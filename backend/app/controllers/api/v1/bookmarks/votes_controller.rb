class Api::V1::Bookmarks::VotesController < Api::V1::VotesController
  before_action :set_voteable

  private

  def set_voteable
    @voteable = Bookmark.find(params[:bookmark_id])
  end
end
