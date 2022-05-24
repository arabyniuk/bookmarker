class Comment
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :user
  embedded_in :bookmark
  embeds_many :comments, class_name: 'Comment'
  embedded_in :comment, inverse_of: :comments

  field :body

  validates :body, presence: true, length: { minimum: 5}
end
