class StocksController < ApplicationController

  def index
    stocks = current_user.stocks
    render json: stocks, include: ['company']
  end 

  def create
    company = Company.find_or_create_by(name: params['company'])
    stock = current_user.stocks.create!(stock_params.merge(company_id: company.id))
  
    render json: stock, status: :created
  end

  def update
    stock = Stock.find(params[:id])
    stock.update!(stock_params)
    stock.reload
    render json: stock
  end 

  
  def destroy
    stock = Stock.find(params[:id])
    stock.destroy
    render json: {message: "Stock deleted"}
  end  

  private 

  def stock_params
    params.require(:stock).permit(:name, :price_purchased_at, :number, :info, :company )
  end 
end
