class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_code, :name, :admin_email, :phone_number, :description,:hours, :website, :image_url, :password_digest

  has_many :menus
  has_many :cuisines
  has_one :restaurant_address
end
