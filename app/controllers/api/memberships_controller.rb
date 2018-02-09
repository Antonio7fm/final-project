class Api::MembershipsController < ApplicationController
before_action :require_logged_in, only: [:create]

def create
  @membership = Membership.new(membership_params)
  if @membership.save
      @group = Group.find_by_id(membership_params[:group_id])
      render "api/groups/show" 
  else
      render json: @membership.errors.full_messages, status: 422
  end
end

def destroy
    @group = Group.find(membership_params[:group_id])
    @membership = Membership.where(user_id: current_user.id, group_id: @group.id)
    @membership.destroy
    render "api/groups/show"
end

private
def membership_params
    params.require(:membership).permit(:user_id, :group_id)
end

end
