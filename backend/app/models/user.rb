class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword

  has_many :bookmarks

  field :email, type: String, default: ""
  #field :password, type: String, default: ""
  field :name, type: String, default: ""
  field :password_digest

  has_secure_password

  validates :name, presence: true, length: { minimum: 3}
  validates :password, presence: true, length: { minimum: 5}
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
