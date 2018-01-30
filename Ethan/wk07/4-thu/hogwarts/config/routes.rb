Hogwarts::Application.routes.draw do

  resources :hogwarts_developments
  root "house#index"
  resource :house, only: [:index, :show]
  resources :students, only: [:index, :show]

end
