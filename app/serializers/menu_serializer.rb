class MenuSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :image_url
  has_one :restaurant
end
