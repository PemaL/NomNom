class RestaurantsController < ApplicationController
    skip_before_action :authenticate_customer, only: :index


    def index 
        render json: Restaurant.all, status: :ok 
      end  

end
