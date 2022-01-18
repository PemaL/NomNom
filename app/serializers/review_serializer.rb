class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment
  has_one :customer
  has_one :restaurant
end
