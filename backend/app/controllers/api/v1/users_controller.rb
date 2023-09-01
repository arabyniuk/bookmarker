class Api::V1::UsersController < ApplicationController
  before_action :set_default_format
  skip_before_action :require_login, only: [:create]

  def set_default_format
    request.format = :json
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @token = JsonWebToken.encode(sub: @user.id.to_s)
    else
      render json: {errors: @user.errors.full_messages}, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
