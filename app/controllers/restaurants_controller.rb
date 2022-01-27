class RestaurantsController < ApplicationController
    skip_before_action :authenticate_customer
    skip_before_action :authenticate_restaurant, only: [:create,:index,:show_me,:show,:update]

    def index 
      restaurant = Restaurant.all
      render json: restaurant, status: :ok 
    end  

    def show 
      restaurant = Restaurant.find_by(id: params[:id])
      if restaurant 
        render json:restaurant, status: :ok 
      else 
        render json: { error: "Not authorized"}, status: :unauthorized 
    end 
  end

  def me_show 
    restaurant = Restaurant.find_by(id: session[:restaurant_id])
    if restaurant 
      render json:restaurant, status: :ok 
    else 
      render json: { error: "Not authorized"}, status: :unauthorized 
  end 
end

    def create 
      restaurant = Restaurant.create!(restaurant_params)
      puts restaurant_params
      render json: restaurant, status: :created
    end 

    def update
      restaurant = Restaurant.find(params[:id])
      restaurant.update!(restaurant_params)

      render json: restaurant, status: :ok 
    end 

    def de

    private 
    
    def restaurant_params
      params.permit(:restaurant_code,:name,:admin_email,:phone_number,:description,:image_url,:hours,:website,:password,:password_confirmation)
    end


  
      
end
