class CreateStocks < ActiveRecord::Migration[6.1]
  def change
    create_table :stocks do |t|
      t.string :name
      t.integer :price_purchased_at
      t.integer :number
      t.string :info
      t.references :user, foreign_key: true, null: false
      t.references :company, foreign_key: true, null: false
      
      t.timestamps
    end
  end
end
