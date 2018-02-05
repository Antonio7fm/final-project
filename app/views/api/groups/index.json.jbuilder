@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :description, :city, :country, 
    :localized_country_name, :localized_location, :state, 
    :lat, :lon, :highres_link, :photo_link, :thumb_link
  end
end