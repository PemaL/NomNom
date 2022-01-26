class RestaurantSessionsController < ApplicationController
    skip_before_action :authenticate_customer
    skip_before_action :authenticate_restaurant, only: :create

    def create
        restaurant = Restaurant.find_by(admin_email: params[:admin_email])
        if restaurant&.authenticate(params[:password])
          session[:restaurant_id] = restaurant.id
          render json: restaurant, status: :created
         else
          render json: { error: "Invalid restaurant name or password" }, status: :unauthorized
         end
      end

    
      def destroy 
        session.clear
        head :no_content
    end
end
