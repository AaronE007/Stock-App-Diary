class Company < ApplicationRecord

  has_many :stocks
  has_many :users, through: :stocks

  validates :name, presence: true, uniqueness: true

end
