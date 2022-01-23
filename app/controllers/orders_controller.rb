class OrdersController < ApplicationController

    def create
        order = Order.create(
          menu_id: params[:menu_id],
          customer_id: params[:customer_id]
        )
        render json: order, status: :created
    end

    def index 
       
    end 

end
