class Order < ApplicationRecord
  belongs_to :menus
  belongs_to :restaurant, through: :menus
end
