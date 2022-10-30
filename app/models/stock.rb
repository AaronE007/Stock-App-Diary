class Stock < ApplicationRecord
  belongs_to :user
  belongs_to :company

  validates :name, presence: true, uniqueness: true
end
