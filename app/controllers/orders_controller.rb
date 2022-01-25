class OrdersController < ApplicationController

    skip_before_action :authenticate_customer, only: :index

    def create
        order = Order.create(
          customer_id: params[:customer_id]
        )

        menu_items = params[:menu_items]

        for item in menu_items
          OrderDetail.create(
            menu_id: item[:menu_id],
            order_id: order.id,
            price: item[:price],
            quantity: item[:quantity]
          )
        end

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
