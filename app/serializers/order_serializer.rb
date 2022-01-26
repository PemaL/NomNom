class OrderSerializer < ActiveModel::Serializer
  attributes :id,:customer_id, :created_at ,:order_details,:menus
  has_many :menus
end


