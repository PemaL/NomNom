class OrderDetailSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity, :menu
  belongs_to :menu

end
