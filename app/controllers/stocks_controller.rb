class StocksController < ApplicationController
  before_action authorize :find_stock, only: [:update, :destroy, :show]

  def index
    render json: Stock.all  
  end 

  def create
    stock = stocks.create!(stock_params)
    render json: stock, status: :created
  end

  def update
    if stocks.includes?(@stock)
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
    if stocks.include?(@stock) 
      @stock.destroy
      render json: {message: "Stock deleted"}
    else 
      no_route
    end 
  end  

  private 

  def find_stock 
    @stock = Stock.find(params[:id])
  end 

  def stock_params
    params.require(:stock).permit(:name, :price_purchased_at, :number, :info)
  end 
end
