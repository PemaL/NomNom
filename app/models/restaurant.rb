class Restaurant < ApplicationRecord
    has_secure_password

    has_many :reviews, dependent: :nullify
    has_many :customers, through: :reviews

    has_many :menus, dependent: :nullify
    has_many :orders, through: :menus

    has_many :cuisines, dependent: :nullify

    has_one :restaurant_address, dependent: :nullify

end
