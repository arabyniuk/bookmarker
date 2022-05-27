Rails.application.routes.draw do
  root 'projects#index'
  resources :projects

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index] do
        resources :bookmarks, only: [:index, :create]
      end
      resources :bookmarks do
        resource :votes, module: :bookmarks
        resources :comments, module: :bookmarks do
          resource :votes, module: :comments
        end
      end
      get '/auto_login', to: 'auth#auto_login'
      post '/login', to: "auth#login"
    end
  end
end
