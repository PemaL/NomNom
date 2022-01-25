class RemoveTotalAmountFromOrderDetails < ActiveRecord::Migration[6.1]
  def change
    remove_column :order_details, :total_amount, :integer
  end
end
