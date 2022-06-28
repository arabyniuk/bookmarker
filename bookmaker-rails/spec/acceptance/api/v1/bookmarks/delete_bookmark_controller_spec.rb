require 'rails_helper'

describe 'delete user bookmark', type: :request do
  let!(:user) {FactoryBot.create(:user)}
  let!(:bookmark) {FactoryBot.create(:bookmark, user: user)}

  before do
    delete "/api/v1/bookmarks/#{bookmark.id}", headers: {'Authorization' => "Bearer #{JsonWebToken.encode(sub: user.id.to_s)}"}
  end

  it "returns status code 204" do
    #expect(user.reload.bookmarks.size).to eq(0)
    expect(response).to have_http_status(204)
  end
end
