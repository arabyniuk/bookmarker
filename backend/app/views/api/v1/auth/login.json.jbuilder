json.user do
  json.id @user.id.to_s
  json.email @user.email
  json.name @user.name
end

json.jwt @token
