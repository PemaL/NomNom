class CustomersController < ApplicationController

  skip_before_action :authenticate_customer, only: [:create,:index]
  skip_before_action :authenticate_restaurant

    def create
        customer = Customer.create!(customer_params)
       
        render json: customer, status: :created
      end

      def index 
        render json: Customer.all, status: :ok 
      end  
      
      def show 
        customer = Customer.find_by(id: session[:customer_id])
        if customer 
          render json:customer, status: :ok 
        else 
          render json: { error: "Not authorized"}, status: :unauthorized 
      end 
    end

    def update
      customer = Customer.find(params[:id])
      customer.update!(customer_params)
      render json:customer, status: :ok 
  end
      
      private 

      def customer_params
        params.permit(:first_name,:last_name,:email,:phone_number,:password, :password_confirmation)
      end
end
