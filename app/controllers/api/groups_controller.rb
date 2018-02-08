class Api::GroupsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def create
		@group = Group.new(group_params)

		if @group.save
			render "api/groups/show" 
		else
			render json: @group.errors.full_messages, status: 422
		end
  end
  
  def show
    @group = Group.includes(:members).find(params[:id])
  end

  def index
    @groups = Group.all
  end


	private

	def group_params
    params.require(:group).permit(
      :name, :description, :city, :country, 
      :localized_country_name, :localized_location, :state, 
      :lat, :lon, :highres_link, :photo_link, :thumb_link)
	end
end
