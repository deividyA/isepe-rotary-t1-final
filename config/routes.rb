Rails.application.routes.draw do
  resources :users
  resources :type_items
  resources :people
  resources :loans
  resources :items
  resources :issues
  get 'pages/index'
  get 'items/index'
  get 'loans/index'
  get 'people/index'
  get 'type_items/index'
  get 'users/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#index"
end
