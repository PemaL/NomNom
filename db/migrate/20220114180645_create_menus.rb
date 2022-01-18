class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.string :image_url
      t.belongs_to :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
