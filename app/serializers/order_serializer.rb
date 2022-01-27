class OrderSerializer < ActiveModel::Serializer
  attributes :id,:customer_id, :created_at
  has_many :order_details, serializer: OrderDetailSerializer

end


