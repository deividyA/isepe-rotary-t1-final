# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_26_211752) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "issues", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", id: :serial, force: :cascade do |t|
    t.string "description", limit: 150
    t.integer "id_type_item"
    t.boolean "availability"
    t.string "item_condition", limit: 20
  end

  create_table "loans", id: :integer, default: -> { "nextval('loan_id_seq'::regclass)" }, force: :cascade do |t|
    t.integer "id_item"
    t.integer "id_people"
    t.date "lending_date"
    t.date "return_date"
    t.date "reservation_date"
  end

  create_table "people", id: :serial, force: :cascade do |t|
    t.string "name", limit: 50
    t.decimal "doc_number"
    t.decimal "phone"
    t.string "address", limit: 150
    t.string "email", limit: 100
    t.string "workplace", limit: 150
    t.boolean "beneficiary"
  end

  create_table "type_items", id: :serial, force: :cascade do |t|
    t.string "description", limit: 150
    t.decimal "return_term"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "items", "type_items", column: "id_type_item", name: "id_item"
  add_foreign_key "loans", "items", column: "id_item", name: "id_item"
  add_foreign_key "loans", "people", column: "id_people", name: "id_person"
end
