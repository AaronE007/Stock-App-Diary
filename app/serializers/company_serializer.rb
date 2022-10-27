class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  has_many :stocks
  has_many :users through: :stocks
end
