class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  include ActionController::Cookies

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

end
