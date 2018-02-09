class AddColumnToUsersTable < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :country, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :highres_link, :string
    add_column :users, :photo_link, :string 
    add_column :users, :thumb_link, :string                                    
  end
end
