class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_code, :name, :email, :phone_number, :description, :opening_time, :closing_time, :image_url, :password_digest
end
