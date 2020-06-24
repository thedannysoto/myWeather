class ChangeUrlColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :searches, :url, :lat
    add_column :searches, :lng, :string
  end
end
