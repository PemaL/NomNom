class MenuSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :image_url, :restaurant_id
  has_one :restaurant
end
