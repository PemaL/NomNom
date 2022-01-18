
Cuisine.destroy_all
RestaurantAddress.destroy_all
Menu.destroy_all
Restaurant.destroy_all

  20.times do 
      Restaurant.create(
      restaurant_code: Faker::Alphanumeric.alphanumeric(number: 10),
      name: Faker::Restaurant.name,
      admin_email: Faker::Internet.email,
      phone_number: Faker::PhoneNumber.phone_number,
      description: Faker::Restaurant.description,
      hours: "9:00AM-10:00PM",
      website: Faker::Internet.url,
      image_url:Faker::Avatar.image,
      password:"1234",
      password_confirmation:"1234"
    ) 
  end 

25.times do
        Cuisine.create(
        category: Faker::Restaurant.type,
        restaurant_id: rand(94...113)
        )
end 

20.times do
    RestaurantAddress.create(
        street: Faker::Address.street_address, 
        city: Faker::Address.city ,
        state: Faker::Address.state, 
        zipcode: Faker::Address.zip_code, 
        restaurant_id: rand(94...113)
)
end

70.times do
  Menu.create!(
      name: Faker::Food.dish, 
      description: Faker::Food.description,
      price: Faker::Commerce.price(range: 8..15.0), 
      image_url: "no image",
      restaurant_id: rand(94...113)
)
end