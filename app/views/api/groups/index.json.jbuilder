json.array! @groups do |group|
    json.extract! group, :id, :name, :localized_location, :photo_link
end