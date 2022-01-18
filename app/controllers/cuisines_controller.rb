class CuisinesController < ApplicationController
   skip_before_action :authenticate_customer, only: :index

    def index
        cuisine = Cuisine.all
        render json: cuisine, status: :ok
    end 
end
