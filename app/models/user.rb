class User < ApplicationRecord
  has_many :stocks
  has_many :companies, through: :stocks
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, length: {in: 6..250}
end
