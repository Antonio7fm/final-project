class AddOrganizerToGroups < ActiveRecord::Migration[5.1]
  def change
    add_column :groups, :organizer_id, :integer
  end
end
