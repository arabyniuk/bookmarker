Rails.application.routes.draw do
  root 'projects#index'
  resources :projects

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index] do
        resources :bookmarks
      end
      get '/auto_login', to: 'auth#auto_login'
    end
  end
end
