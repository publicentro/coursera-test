json.array!(@usuarios) do |usuario|
  json.extract! usuario, :id, :first_name, :last_name
  json.url usuario_url(usuario, format: :json)
end
