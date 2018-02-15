Hogwarts::Application.routes.draw do

  resources :hogwarts_developments

   root to: "houses#index"

  get '/houses/:id', to: 'houses#show'

  resource :houses, only: [:index, :show]
  resources :students, only: [:index, :show, :new, :create]

end
