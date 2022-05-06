class Api::V1::Users::BookmarksController < Api::V1::BookmarksController
  before_action :set_user

  def set_user
    @user = User.find(params[:user_id])
  end
end
