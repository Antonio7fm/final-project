class AddNameToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :name, :string, null: false
    change_column :users, :bio, :text, :null => true
    change_column :users, :lat, :float, :null => true
    change_column :users, :lon, :float, :null => true    
  end
end
