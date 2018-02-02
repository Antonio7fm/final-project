class CreateGroups < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.string :name
      t.text :description
      t.string :city
      t.string :country
      t.string :localized_country_name
      t.string :localized_location
      t.string :state
      t.float :lat
      t.float :lon
      t.string :highres_link
      t.string :photo_link
      t.string :thumb_link

      t.timestamps
    end
  end
end
