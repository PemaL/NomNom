Rails.application.routes.draw do
  
  resources :order_details
  resources :cuisines
  resources :orders
  resources :reviews
  resources :menus
  resources :restaurant_addresses
  resources :restaurants
  resources :addresses
  resources :customers
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post '/login',to: 'sessions#create'
  delete '/logout', to:'sessions#destroy'

  get '/me', to: 'customers#show'
  get '/restaurant', to: 'restaurants#show'

  post '/order', to: 'orders#create'
  get '/currentRestaurant', to: "restaurants#me_show"
  post '/restaurantlogin',to: 'restaurant_sessions#create'
  delete '/restaurantlogout', to:'restaurant_sessions#destroy'
end
