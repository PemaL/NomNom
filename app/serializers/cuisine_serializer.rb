class CuisineSerializer < ActiveModel::Serializer
  attributes :id, :category
  has_one :restaurant
end
