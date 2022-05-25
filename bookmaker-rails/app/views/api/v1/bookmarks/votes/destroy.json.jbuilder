json.bookmark do
  json.id @bookmark.id.to_s
  json.title @bookmark.title
  json.icon @bookmark.icon_url
  json.created_at @bookmark.created_at


  json.comments @bookmark.comments do |comment|
    json.id comment.id.to_s
    json.body comment.body
    json.created_at comment.created_at
    json.bookmark_id comment._parent.id.to_s
  end

  json.votes @bookmark.votes do |vote|
    json.id vote.id.to_s
    json.user_id vote.user_id.to_s
    json.votable_id @bookmark.id.to_s
    json.vatable_type 'Bookmark'
  end
end
