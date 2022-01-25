class Menu < ApplicationRecord
  belongs_to :restaurant
  has_many :order_details
  has_many :orders, through: :order_details
end
