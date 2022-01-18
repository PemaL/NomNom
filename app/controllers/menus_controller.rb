class MenusController < ApplicationController
    skip_before_action :authenticate_customer, only: :index
  
      def index 
          menu = Menu.all
          render json: menu,status: :ok
      end
  
end
