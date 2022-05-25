class Vote
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :user, inverse_of: nil

  embedded_in :bookmark
end
