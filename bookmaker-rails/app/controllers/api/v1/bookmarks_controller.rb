class Api::V1::BookmarksController < ApplicationController
  def index
    @bookmarks = @user.bookmarks
  end

  def create
    sleep 3
    @bookmark = @user.bookmarks.build(bookmark_params)

    unless @bookmark.save
      render json: {errors: @bookmark.errors.full_messages}, status: :not_acceptable
    end
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:link)
  end
end
