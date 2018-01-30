class CreateHogwartsDevelopments < ActiveRecord::Migration[5.0]
  def change
    create_table :hogwarts_developments do |t|

      t.timestamps
    end
  end
end
