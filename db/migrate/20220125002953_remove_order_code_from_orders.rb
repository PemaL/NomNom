class RemoveOrderCodeFromOrders < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :order_code, :string
  end
end
