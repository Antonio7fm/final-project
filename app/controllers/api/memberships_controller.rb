class Api::MembershipsController < ApplicationController
before_action :require_logged_in, only: [:create]

def create
  @memebership = Memebership.new(membership_params)

  if @memebership.save
      render "api/groups/show" 
  else
      render json: @memebership.errors.full_messages, status: 422
  end
end

private
def membership_params
    params.require(:membership).permit(:user_id, :group_id)
end

end
