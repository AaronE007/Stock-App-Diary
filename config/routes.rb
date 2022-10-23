Rails.application.routes.draw do
  resources :companies, only: [:index, :create] do 
    resources :stocks, only: [:index, :create, :update, :show, :destroy]
  end 
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
