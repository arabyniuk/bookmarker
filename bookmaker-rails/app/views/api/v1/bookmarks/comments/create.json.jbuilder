json.comment do
  json.id @comment.id.to_s
  json.body @comment.body
  json.bookmark_id @comment._parent.id.to_s
  json.created_at @comment.created_at
end
