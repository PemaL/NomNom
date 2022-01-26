class RestaurantAddressesController < ApplicationController
    skip_before_action :authenticate_customer, only: [:index,:create]
    skip_before_action :authenticate_restaurant, only: [:index,:create]

    def index
        r_address = RestaurantAddress.all
        render json: r_address, status: :ok
    end 

    def create 
      r_address = RestaurantAddress.create!(restaurant_addresses_params)

      render json: r_address, status: :created
    end 

    def update  
        r_address = RestaurantAddress.find(params[:id])
        r_address.update!(restaurant_addresses_params)

        render json: r_address, status: :ok
      end 

    private 

    def restaurant_addresses_params 
        params.permit(:street,:city,:state,:zipcode,:restaurant_id)
    end 


end
