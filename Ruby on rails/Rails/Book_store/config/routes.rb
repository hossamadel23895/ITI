Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'users/new'
  get 'users/create'

  devise_for :users
  scope '/admin' do
    resources :users
  end
  resources :roles

  resources :books
  root to: "books#index"
  
end
