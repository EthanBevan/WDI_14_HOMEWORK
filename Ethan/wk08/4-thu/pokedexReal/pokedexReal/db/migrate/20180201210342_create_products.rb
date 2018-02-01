class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :species
      t.string :nickname
      t.string :level

      t.timestamps
    end
  end
end
