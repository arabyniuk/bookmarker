class Api::V1::AuthController < ApplicationController
  skip_before_action :require_login, only: [:login]

  def auto_login
  end

  def login
    @user = User.find_by(email: login_params[:email])
    if @user && @user.authenticate(login_params[:password])
      payload = {user_id: @user.id}
      @token = encode_token(payload)
      #render json: {user: UserSerializer.new(user), jwt: token}, status: :accepted
    else
      render json: {failure: "Invalid email or password"}, status: :unauthorized
    end
  end

  private

  def login_params
    params.require(:user).permit(:email, :password)
  end
end
