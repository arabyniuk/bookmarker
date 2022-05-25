class Api::V1::VotesController < ApplicationController
  def create
    @bookmark.votes.where(user_id: current_user).first_or_create
    @bookmark.reload
  end

  def destroy
    @bookmark.votes.destroy_all({'user_id': current_user.id})
    @bookmark.reload
  end
end
