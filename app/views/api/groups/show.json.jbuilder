json.set! @group.id do 
    json.extract! @group, :id, :name, :city, :country, 
    :localized_country_name, :localized_location, :state, 
    :lat, :lon, :highres_link, :photo_link, :thumb_link, :organizer
    json.set! "description", strip_tags(@group.description) 
end

json.members do 
    json.array! @group.members, :id, :name
end

membership = Membership.where(user_id: current_user.id, group_id: @group.id)

json.membership !membership[0] ? false : membership[0].id