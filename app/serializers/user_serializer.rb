class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :unique_companies

  has_many :stocks
  has_many :companies, through: :stocks

  def unique_companies
    unique_companies = object.companies.uniq
    return unique_companies
  end 
end


