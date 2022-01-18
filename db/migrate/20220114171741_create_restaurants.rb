class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :restaurant_code
      t.string :name
      t.string :admin_email
      t.string :phone_number
      t.string :description
      t.string :hours
      t.string :website
      t.string :image_url
      t.string :password_digest

      t.timestamps
    end
  end
end
