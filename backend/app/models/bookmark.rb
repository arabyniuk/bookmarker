class Bookmark
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :user
  embeds_many :comments
  embeds_many :votes

  field :link
  field :title

  mount_uploader :icon, IconUploader

  validates :link, presence: true, length: { minimum: 15}
  before_validation :set_parsed_fields, on: :create
  default_scope { order(created_at: :desc) }

  def set_parsed_fields
    page = MetaInspector.new(link)
    if page.response.status == 200
      self.title = page.title
      self.remote_icon_url = page.images.favicon
    end
    true
  rescue
    self.errors.add(:base, "Country can't be blank")
  end
end
