require 'rails_helper'

describe 'post a bookmark route', type: :request do
  let!(:user) {FactoryBot.create(:user)}
  @link = 'https://google.com'

  before do
    post "/api/v1/users/#{user.id}/bookmarks",
      params: { bookmark: { link: @link} },
      headers: { 'Authorization' => "Bearer #{JsonWebToken.encode(sub: user.id.to_s)}" }
  end

  it 'returns the bookmark' do
    expect(JSON.parse(response.body).fetch('bookmarks', {})['link']).to eq(@link)
  end
end
