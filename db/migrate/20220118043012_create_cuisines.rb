class CreateCuisines < ActiveRecord::Migration[6.1]
  def change
    create_table :cuisines do |t|
      t.string :category
      t.belongs_to :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
