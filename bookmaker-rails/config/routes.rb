Rails.application.routes.draw do
  root 'projects#index'
  resources :projects

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index] do
        resources :bookmarks, only: [:index, :create]
      end
      resources :bookmarks, only: [:show]
      get '/auto_login', to: 'auth#auto_login'
    end
  end
end
