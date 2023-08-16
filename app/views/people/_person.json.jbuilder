json.extract! person, :id, :name, :doc_number, :phone, :address, :email, :workplace, :beneficiary, :created_at, :updated_at
json.url person_url(person, format: :json)
