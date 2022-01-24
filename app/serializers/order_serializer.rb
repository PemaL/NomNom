class OrderSerializer < ActiveModel::Serializer
  attributes :id, :menu_id, :customer_id, :created_at
  has_one :menu
end


