Rails.application.routes.draw do
resources :dishes
  #controller file & method
  root to: 'pages#home'
get '/', to: 'pages#home'
get '/about', to: 'pages#about'

get '/dishes/new', to: 'dishes#new'

get '/dishes/:id', to: 'dishes#:show'

get '/dishes', to: 'dishes#index'

post '/dishes', to: 'dishes#create'


put '/dishes/edit', to: 'dishes#edit'


delete '/dishes/:id', to: 'dishes#destroy'
put '/dishes/:id', to: 'dishes#update'

resources :dishes
end

