class UsersController < ApplicationController
  
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
  end

  def show
    if current_user
    render json: current_user
    else 
      render json: {error: "Not Authorized"}, status: :unauthorized
    end 
  end 


  private

  def user_params
    params.permit(:username, :email, :password, :password_confirmation, :bio)
  end

end
