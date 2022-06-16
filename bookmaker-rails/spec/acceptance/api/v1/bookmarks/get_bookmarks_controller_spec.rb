require 'rails_helper'
require 'rspec/mocks/standalone'

describe 'get user bookmarks', type: :request do
  before(:all) do
    allow_any_instance_of(Bookmark).to receive(:set_parsed_fields)
  end
  let!(:user) {FactoryBot.create(:user)}
  let!(:bookmark_1) {FactoryBot.create(:bookmark, user: user)}
  let!(:bookmark_2) {FactoryBot.create(:bookmark, user: user)}

  before do
    get "/api/v1/users/#{user.id}/bookmarks", headers: {'Authorization' => "Bearer #{JsonWebToken.encode(sub: user.id.to_s)}"}
  end

  it "get user's bookmarks" do
    #TODO check if bookmarks exists
    expect(JSON.parse(response.body).fetch('bookmarks', '').size).to eq(2)
  end
end
