class CompaniesController < ApplicationController
  skip_before_action :authorize, only: [:index]
  
  def create
    company = Company.create!(companies_params)
    render json: company, status: :created
  end

  def index 
    companies = Company.all
    render json: companies 
  end 


  private 

  def companies_params
    params.require(:company).permit(:name, :description)
  end
end
