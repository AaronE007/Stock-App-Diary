class UsersController < ApplicationController
  skip_before_action :authorize!, only: :create


  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
  end

  def show
    if current_user
    render json: current_user
    else 
      no_route
    end 
  end 


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :bio)                        
  end


end
