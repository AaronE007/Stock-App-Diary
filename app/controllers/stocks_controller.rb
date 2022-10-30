class StocksController < ApplicationController

  def index
    stocks = current_user.stocks
    render json: stocks, include: ['company']
  end 

  def create
    company = Company.find_or_create_by(name: params["company"])
    stock = current_user.stocks.create!(stock_params)
    render json: stock, status: :created
  end

  # def update
  #   if current_user.stocks.includes?(@stock)
  #     @stock.update!(post_params)
  #     render json: @stock
  #   else
  #     no_route
  #   end 
  # end 

  
  # def destroy
  #   if current_user.stocks.include?(@stock) 
  #     @stock.destroy
  #     render json: {message: "Stock deleted"}
  #   else 
  #     no_route
  #   end 
  # end  

  private 

  def stock_params
    params.require(:stock).permit(:name, :price_purchased_at, :number, :info, :company )
  end 
end
