Rails.application.routes.draw do
  resources :books
  resources :users
  resources :posts
  root 'posts#index'
  resources :fetch_direct_uploads, only: [:create]
  resources :direct_ujs_uploads, only: [:create]
  resources :direct_uploads, only: [:create]
end
