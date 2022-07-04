

class ApplicationController < ActionController::Base
  before_action :set_current_user
 
  def set_current_user
    if session[:user_id]
      Current.user = User.find_by(id: session[:user_id])
    end

  end

  rescue_from "CanCan::AccessDenied" do
    flash[:error] = "u r not authorize  "
  end
end
