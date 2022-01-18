class RestaurantAddressesController < ApplicationController
    skip_before_action :authenticate_customer, only: :index

    def index
        r_address = RestaurantAddress.all
        render json: r_address, status: :ok
    end 
end
