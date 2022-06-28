class Api::V1::BookmarksController < ApplicationController
  #skip_before_action :require_login, only: [:show, :index]

  def index
    @bookmarks = @user.bookmarks
  end

  def create
    @bookmark = @user.bookmarks.build(bookmark_params)

    if @bookmark.save
      render status: :created
    else
      render json: {errors: @bookmark.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    @bookmark = Bookmark.find(params[:id])

    if @bookmark.destroy
      head :no_content
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
