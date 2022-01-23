class Order < ApplicationRecord
  belongs_to :menu
  belongs_to :customer
end
