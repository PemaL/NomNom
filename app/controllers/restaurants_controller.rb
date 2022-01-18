class RestaurantsController < ApplicationController
    skip_before_action :authenticate_customer, only: :index

    def index 
      restaurant = Restaurant.all
      render json: restaurant, status: :ok 
    end  
    
      
end
