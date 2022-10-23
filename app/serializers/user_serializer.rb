class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio

  has_many :stocks
  has_many :companies, through: :stocks
end
