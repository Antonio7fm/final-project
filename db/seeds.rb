# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative 'group_seeds'
include Groups
# localized_country_name,localized_location
# topics,link,members,rating,created,join_mode,organizer,urlname,category,visibility,utc_offset
# score,id,status,timezone,topics,link,members,rating,created,join_mode,organizer,urlname,category,visibility,utc_offset,next_event,meta_category,group_photo

require_relative 'user_seeds'
include Users
# topics,joined,link,status,other_services,visited,self,

# User.create!(
#     name:"Guest", 
#     email:"guest@gmail.com", 
#     password:"password",
#     highres_link: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
#     photo_link: "http://www.resumesetc.com.au/wp-content/uploads/2017/10/blank-profile-picture-973460-300x300.png",
#     thumb_link: "https://www.sc.fsu.edu/images/people/none.png"
#     )

# GROUPS.each do |groupObj|
#     groupObj.each do |key, group|
#         @newGroup = Group.new
#         @newGroup.attributes = group.reject{ |key,value| !@newGroup.attributes.keys.member?(key.to_s)}
#         photo = group[:key_photo]
#         if photo 
#             photo.each do |photo_detail_key, photo_detail_value|
#                 next if photo_detail_key == :id || photo_detail_key == :type || photo_detail_key == :base_url || photo_detail_key == :photo_id
#                 @newGroup[photo_detail_key] = photo_detail_value
#             end
#         else 
#             @newGroup.highres_link = "https://previews.123rf.com/images/coramax/coramax1208/coramax120801891/14868874-3d-people-men-person-with-blank-bubbles-concept-of-dialogue-communication.jpg"
#             @newGroup.photo_link = "https://thumbs.dreamstime.com/t/group-stylized-blank-people-stand-white-d-render-icon-teamwork-business-crowd-concept-35994211.jpg"
#             @newGroup.thumb_link = "https://thumbs.dreamstime.com/t/group-stylized-blank-people-stand-white-d-render-icon-teamwork-business-crowd-concept-35994211.jpg"  
#         end
#         @newGroup.organizer_id = rand(2..200)    
#         @newGroup.save!
#     end
# end

USERS.each do |user|
    @newUser = User.new
    debugger
    @newUser.attributes = user.reject{ |key,value| !@newGroup.attributes.keys.member?(key.to_s)}
    photo = user[:photo]
    if photo 
        photo.each do |photo_detail_key, photo_detail_value|
            next if photo_detail_key == :id || photo_detail_key == :type || photo_detail_key == :base_url || photo_detail_key == :photo_id  
            @newUser[photo_detail_key] = photo_detail_value
        end
    else 
        @newUser.highres_link = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        @newUser.photo_link = "http://www.resumesetc.com.au/wp-content/uploads/2017/10/blank-profile-picture-973460-300x300.png"
        @newUser.thumb_link = "https://www.sc.fsu.edu/images/people/none.png"        
    end
    @newUser.email = user[:fake_id].to_s
    @newUser.password = "password"
    @newUser.save!
end

# group_ids = Group.all.ids

# group_ids.each do |id|
#     rand(5..40).times do 
#         @membership = Membership.new
#         @membership.user_id = User.where.not(id: 1).sample.id
#         @membership.group_id = id
#         @membership.save! unless Group.find(id).members.exists?(@membership.user_id)
#     end
# end
