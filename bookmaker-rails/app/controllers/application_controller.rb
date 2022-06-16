class ApplicationController < ActionController::API
  before_action :require_login
  before_action :set_default_format

  def set_default_format
    request.format = :json
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JsonWebToken.decode(token)
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decoded_token
      puts decoded_token.class
      user_id = decoded_token['sub']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def require_login
    render json: {message: 'Please Login or Sign up to see content'}, status: :unauthorized unless logged_in?
  end
end
