json.comment do
  json.id @voteable.id.to_s
  json.body @voteable.body
  json.created_at @voteable.created_at
  json.bookmark_id @voteable._parent.id.to_s

  json.votes @voteable.votes do |vote|
    json.id vote.id.to_s
    json.user_id vote.user_id.to_s
    json.votable_id @voteable.id.to_s
    json.votable_type 'Comment'
  end
end
