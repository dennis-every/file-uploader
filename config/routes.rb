Rails.application.routes.draw do
  resources :users
  resources :posts
  root 'posts#index'
  resources :direct_ujs_uploads, only: [:create]
  resources :direct_uploads, only: [:create]
end
