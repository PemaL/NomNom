class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone_number, :password_digest,:orders

end
