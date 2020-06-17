class CreateSearches < ActiveRecord::Migration[6.0]
  def change
    create_table :searches do |t|
      t.string :city
      t.string :zip
      t.timestamps
    end
  end
end
