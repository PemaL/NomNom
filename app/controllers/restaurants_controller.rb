class RestaurantsController < ApplicationController
    skip_before_action :authenticate_customer, only: [:index,:show]

    def index 
      restaurant = Restaurant.all
      render json: restaurant, status: :ok 
    end  

    def show 
      restaurant = Restaurant.find(params[:id])
      render json: restaurant, status: :ok 
    end 
      
end
