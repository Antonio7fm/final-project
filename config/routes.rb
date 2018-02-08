  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :groups, only: [:create, :index, :show] do 
      resources :memberships, only: [:create, :destroy]
    end
  end

  root "static_pages#root"
end

