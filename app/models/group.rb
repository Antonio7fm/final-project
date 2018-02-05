class Group < ApplicationRecord
  validates :name, :description, :author_id, presence: true
end
