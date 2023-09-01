class Api::V1::VotesController < ApplicationController
  def create
    @voteable.votes.where(user_id: current_user).first_or_create
    @voteable.reload
  end

  def destroy
    @voteable.votes.destroy_all({'user_id': current_user.id})
    @voteable.reload
  end
end
