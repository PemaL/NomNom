class MenuSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :name, :description, :price, :image_url,:image, :restaurant_id
  has_one :restaurant

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end 
end
