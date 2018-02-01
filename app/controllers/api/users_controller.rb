class Api::UsersController < ApplicationController

	def create
		# debugger
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show" 
			# this will retrun a json object of "find @user and get 
			# their name, email, and id" located in views/api/users/views
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	private

	def user_params
		params.require(:user).permit(:name, :password, :email)
	end

end