json.bookmark do
  json.id @bookmark.id.to_s
  json.title @bookmark.title
  json.icon @bookmark.icon_url
  json.created_at @bookmark.created_at

  json.votes @bookmark.votes do |vote|
    json.id vote.id.to_s
    json.user_id vote.user_id.to_s
    json.votable_id @bookmark.id.to_s
    json.votable_type 'Bookmark'
  end
end
