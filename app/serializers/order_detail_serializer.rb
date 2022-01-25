class OrderDetailSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity
  has_many :menus
  has_one :order
end
