class Api::V1::UsersController < ApplicationController
  before_action :set_default_format
  skip_before_action :require_login, only: [:create]

  def set_default_format
    request.format = :json
  end

  def create
    sleep 5
    @user = User.new(user_params)
    if @user.save
      payload = {user_id: @user.id}
      @token = encode_token(payload)
    else
      render json: {errors: @user.errors.full_messages}, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
