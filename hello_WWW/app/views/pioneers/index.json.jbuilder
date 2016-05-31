json.array!(@pioneers) do |pioneer|
  json.extract! pioneer, :id, :first_name, :last_name
  json.url pioneer_url(pioneer, format: :json)
end
