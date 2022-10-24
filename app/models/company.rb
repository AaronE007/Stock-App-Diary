class Company < ApplicationRecord
  has_many :stocks
  has_many :users, through: :stocks

end
