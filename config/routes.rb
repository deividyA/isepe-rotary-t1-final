Rails.application.routes.draw do
  devise_for :users,
  controllers: {
    sessions: 'users/sessions'
  },
  path: 'auth',
  path_names: { sign_in: 'login', sign_out: 'logout', password: 'secret', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: 'cmon_let_me_in' }
  devise_scope :user do  
    get '/users/sign_out' => 'devise/sessions#destroy'     
 end
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
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#index"
end
