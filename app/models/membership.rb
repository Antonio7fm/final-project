class Membership < ApplicationRecord
    validates :user_id, :group_id, presence: true
    validates :user_id, uniqueness: { scope: :group_id }

    belongs_to :group
    belongs_to :user    
end
