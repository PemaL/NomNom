class OrderDetailsController < ApplicationController
    def create
        OrderDetail.create(
            menu_id: params[:menu_id]
            order_id: params[:order_id]
            price: params[:price]
            quantity: params[:quantity]
            total_amount: params[:total_amount]
        )
    end
end
