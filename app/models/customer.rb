class Customer < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :restaurant, through: :reviews

    has_many :orders
    has_many :menus, through: :orders

    has_one :address

end
