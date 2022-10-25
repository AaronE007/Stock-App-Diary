class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :stocks

  has_many :stocks

end
