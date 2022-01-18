class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    before_action :authenticate_customer

    private

    # def find_item
    #     @item = Item.find(params[:id])
    # end

    # def find_rating
    #     @rating = Rating.find(params[:id])
    # end
     
    def authenticate_customer
        @current_customer = Customer.find_by(id: session[:customer_id])
        render json: { error: "Not authorized" }, status: :unauthorized unless @current_customer
    end

    def render_unprocessable_entity
        render json: {error: "unprocessable entity"}, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "not found" }, status: :not_found
    end

end
