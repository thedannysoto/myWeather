class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :searches, :zip, :url 
    rename_column :searches, :city, :location
  end
end
