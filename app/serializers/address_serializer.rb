class AddressSerializer < ActiveModel::Serializer
  attributes :id, :street, :city, :state, :zipcode
  has_one :user
end
