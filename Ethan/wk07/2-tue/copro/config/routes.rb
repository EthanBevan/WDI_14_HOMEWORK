Rails.application.routes.draw do
  
  resources :likes
  resources :comments
	get '/', to: 'pages#home'

	get '/login', to: 'session#new'
	post '/session', to: 'session#create'


	get '/edit', to: 'pages#edit'

	resources :projects, only: [:new, :create, :show]
	resources :users

end