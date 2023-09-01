require 'rails_helper'

describe 'post a bookmark route', type: :request do
  let!(:user) { FactoryBot.create(:user) }

  context 'with valid parameters' do
    let(:link) { 'https://google.com' }

    before do
      post "/api/v1/users/#{user.id}/bookmarks",
        params: { bookmark: { link: link} },
        headers: { 'Authorization' => "Bearer #{JsonWebToken.encode(sub: user.id.to_s)}" }
    end

    it 'returns the link' do
      expect(JSON.parse(response.body).fetch("bookmark", {})['link']).to eq(link)
    end

    it 'returns a created status' do
      expect(response).to have_http_status(:created)
    end
  end

  context 'with invalid parameters' do
    let(:link) { '' }

    before do
      post "/api/v1/users/#{user.id}/bookmarks",
        params: { bookmark: { link: link} },
        headers: { 'Authorization' => "Bearer #{JsonWebToken.encode(sub: user.id.to_s)}" }
    end

    it 'returns a unprocessable entity status' do
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
