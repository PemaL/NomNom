class Order < ApplicationRecord
  has_many :menus
  has_one :restaurant, through: :menus
end
