class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    before_action :authenticate_customer, :authenticate_restaurant

    private

    def authenticate_customer
        @current_customer = Customer.find_by(id: session[:customer_id])
        render json: { error: "Not authorized" }, status: :unauthorized unless @current_customer
    end

    def authenticate_restaurant
        @current_restaurant = Restaurant.find_by(id: session[:restaurant_id])
        render json: { error: "Not authorized" }, status: :unauthorized unless @current_restaurant
    end

    def render_unprocessable_entity
        render json: {error: "unprocessable entity"}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "not found" }, status: :not_found
    end

end
