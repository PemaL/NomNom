class OrdersController < ApplicationController

    skip_before_action :authenticate_customer, only: :index

    def create
        order = Order.create(
          menu_id: params[:menu_id],
          customer_id: params[:customer_id]
        )
        render json: order, status: :created
    end

    # def show 
    #     order = Order.find_by(customer_id: session[:customer_id])
    #     if order 
    #       render json: order, status: :ok 
    #     else 
    #       render json: {error: "Not found"}
    #     end 
    # end 

    def index 
      order = Order.all
      render json: order, status: :ok

    end 
end
