class MenusController < ApplicationController
    skip_before_action :authenticate_customer
    skip_before_action :authenticate_restaurant
     
      def index 
          menu = Menu.all
          render json: menu,status: :ok
      end

      def show 
        menu = Menu.find_by(restaurant_id: params[:id])
        render json: menu, status: :ok
      end 

      def create 
          menu = Menu.create!(menu_params)
          render json: menu, status: :created 
      end 

      def update
        menu = Menu.find(params[:id])
        menu.update!(menu_params)
        render json:menu, status: :ok 
    end

      def destroy 
        menu = Menu.find(params[:id])
        menu.destroy 
      end 


    private 

    def menu_params
      params.permit(:name,:description,:price,:image_url,:image,:restaurant_id)
    end

end
