class Api::V1::BookmarksController < ApplicationController
  #skip_before_action :require_login, only: [:show, :index]

  def index
    @bookmarks = @user.bookmarks
  end

  def create
    @bookmark = @user.bookmarks.build(bookmark_params)

    unless @bookmark.save
      render json: {errors: @bookmark.errors.full_messages}, status: :not_acceptable
    end
  end

  def destroy
    @bookmark = Bookmark.find(params[:id])

    if @bookmark.destroy
      head :ok
    end
  end

  def show
    @bookmark = Bookmark.find(params[:id])
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:link)
  end
end
