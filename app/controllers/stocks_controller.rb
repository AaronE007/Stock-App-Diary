class StocksController < ApplicationController

  def index
    render json: @current_user.stocks
  end 

  def create
    stock = current_user.stocks.create(stock_params)
    render json: stock, status: :created
  end

  def update
    if current_user.stocks.includes?(@stock)
      @stock.update!(post_params)
      render json: @stock
    else
      no_route
    end 
  end 

  # def show
  #   no_route unless current_user.stocks.include? @stock
  #   render json: @stock
  # end

  def destroy
    if current_user.stocks.include?(@stock) 
      @stock.destroy
      render json: {message: "Stock deleted"}
    else 
      no_route
    end 
  end  

  private 

  # def find_stock 
  #   @stock = Stock.find(params[:id])
  # end 

  def stock_params
    params.require(:stock).permit(:name, :price_purchased_at, :number, :info, :company_id)
  end 
end
