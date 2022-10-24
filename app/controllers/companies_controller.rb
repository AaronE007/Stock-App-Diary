class CompaniesController < ApplicationController
  
  def create
    company = Company.create!(companies_params)
    render json: company, status: :created
  end

  def index 
    companies = @current_user.companies
    render json: companies 
  end 


  private 

  def companies_params
    params.require(:company).permit(:name, :description)
  end
end
