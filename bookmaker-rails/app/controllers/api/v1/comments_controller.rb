class Api::V1::CommentsController < ApplicationController
  def create
    sleep 3
    @comment = @bookmark.comments.build(comment_params)
    @comment.user = current_user

    unless @comment.save
      render json: {errors: @comment.errors.full_messages}, status: :not_acceptable
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
