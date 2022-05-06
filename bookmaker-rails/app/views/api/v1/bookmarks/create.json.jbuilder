json.bookmark do
  json.id @bookmark.id.to_s
  json.title @bookmark.title
  json.icon @bookmark.icon_url
  json.created_at @bookmark.created_at
end
