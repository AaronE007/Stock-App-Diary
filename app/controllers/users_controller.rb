class UsersController < ApplicationController
  

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user
  end

  def show
    user = current_user 
    if user
    render json: user
    else 
      render json: {error: "Not Authorized"}, status: :unauthorized
    end 
  end 


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :bio)                        
  end

end
