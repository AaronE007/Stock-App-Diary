Rails.application.routes.draw do
  resources :companies, only: [:index, :create] 
  resources :stocks, only:[:index, :create, :update, :destroy]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/search/:price", to: "companies#find_price"

end




