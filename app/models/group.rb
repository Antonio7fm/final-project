class Group < ApplicationRecord
  has_many :memberships

  has_many :members, 
  through: :memberships,
  source: :user

  belongs_to :organizer, 
  class_name: :User
end
