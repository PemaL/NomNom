class RestaurantAddressSerializer < ActiveModel::Serializer
  attributes :id, :street, :city, :state, :zipcode
  has_one :restaurant
end
