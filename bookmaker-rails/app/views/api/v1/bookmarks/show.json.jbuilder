json.id @bookmark.id.to_s
json.title @bookmark.title
json.icon @bookmark.icon_url
json.created_at @bookmark.created_at

json.array!(@bookmark.comments) do |json, comment|

def comment_line(comment)
  json.id comment.id.to_s
  json.body comment.body
  json.created_at comment.created_at
end

def iterate(json, comment)
  if comment.comments.present?
    binding.pry
    json.array!(comment.comments) do |json, c|
      comment_line(json, c)
    end
  else
    comment_line(json, comment)
  end
end

json.array!(@bookmark.comments) do |json, comment|
  iterate(json, comment)
end


#json.comments @bookmark.comments do |comment|
#  json.id comment.id.to_s
#  json.body comment.body
#end

#json.array!(@bookmark.comments) do |json, comment|
#  json.id
#end
