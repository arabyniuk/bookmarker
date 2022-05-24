#def comment_line(json, comment)
#  json.id comment.id.to_s
#  json.body comment.body
#  json.created_at comment.created_at
#end
#
#def handle_comments(json, comment)
#  if comment.comments.present?
#    comment_line(json, comment)
#    json.comments comment.comments do |comment|
#      handle_comments(json, comment)
#    end
#  else
#    comment_line(json, comment)
#  end
#end

json.bookmarks @bookmarks do |bookmark|
  json.id bookmark.id.to_s
  json.title bookmark.title
  json.icon bookmark.icon_url
  json.created_at bookmark.created_at

  json.comments bookmark.comments do |comment|
    #handle_comments(json, comment)
    json.id comment.id.to_s
    json.body comment.body
    json.created_at comment.created_at
    json.bookmark_id comment._parent.id.to_s
  end
end
