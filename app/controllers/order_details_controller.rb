class OrderDetailsController < ApplicationController
    skip_before_action :authenticate_restaurant
end
