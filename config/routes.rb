Rails.application.routes.draw do
  resources :posts
  root 'posts#index'
  resources :direct_uploads, only: [:create]
end
