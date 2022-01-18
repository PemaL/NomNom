class CuisineSerializer < ActiveModel::Serializer
  attributes :id, :type
  has_one :restaurant
end
