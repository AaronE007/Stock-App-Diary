class CompaniesController < ApplicationController
  skip_before_action :authorize!, only: [:index, :search, :find_price]

  
  def create
    company = Company.create(companies_params)
    render json: company, status: :created
  end

  def index 
    companies = Company.all
    render json: companies
  end 

  def find_price
    company = Company.joins(:stocks).where({ stocks: { price_purchased_at: params[:price]} })
    render json: company,  include: :stocks
  end
 

  private 

  def companies_params
    params.require(:company).permit(:name, :description)
  end
end

