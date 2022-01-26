class SessionsController < ApplicationController
    skip_before_action :authenticate_customer, only: :create
    skip_before_action :authenticate_restaurant

    def create
        customer = Customer.find_by(email: params[:email])
        if customer&.authenticate(params[:password])
          session[:customer_id] = customer.id
          render json: customer, status: :created
         else
          render json: { error: "Invalid customername or password" }, status: :unauthorized
         end
      end

      def destroy 
        session.clear
        head :no_content
    end
end