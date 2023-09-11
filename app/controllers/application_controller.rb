class ApplicationController < ActionController::Base
    before_action :authenticate_user!
    respond_to :json, :html
end
