class MenusController < ApplicationController
    skip_before_action :authenticate_customer, only: [:index,:show]
  
      def index 
          menu = Menu.all
          render json: menu,status: :ok
      end

      def show 
        menu = Menu.find_by(restaurant_id: :params[:id])
        render json: menu, status: :ok
      end 
end
