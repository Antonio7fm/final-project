json.extract! @user, :name, :id, :email

json.groups do
    json.array! @user.groups, :id, :name
end