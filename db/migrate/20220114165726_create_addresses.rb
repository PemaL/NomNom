class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :city
      t.string :state
      t.integer :zipcode
      t.belongs_to :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end

