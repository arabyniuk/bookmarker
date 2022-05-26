json.bookmark do
  json.id @voteable.id.to_s
  json.title @voteable.title
  json.icon @voteable.icon_url
  json.created_at @voteable.created_at


  json.comments @voteable.comments do |comment|
    json.id comment.id.to_s
    json.body comment.body
    json.created_at comment.created_at
    json.bookmark_id comment._parent.id.to_s

    json.votes comment.votes do |vote|
      json.id vote.id.to_s
      json.user_id vote.user_id.to_s
      json.votable_id comment.id.to_s
      json.votable_type 'Comment'
    end
  end

  json.votes @voteable.votes do |vote|
    json.id vote.id.to_s
    json.user_id vote.user_id.to_s
    json.votable_id @voteable.id.to_s
    json.vatable_type 'Bookmark'
  end
end
