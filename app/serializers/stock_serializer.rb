class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :price_purchased_at, :info, :number, :company

  belongs_to :user
  belongs_to :company
end
