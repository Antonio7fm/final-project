Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :destroy]
    resources :groups, only: [:index, :show, :create, :destory]
    resources :events, only: [:index, :show, :create, :destory]
    resource :session, only: [:create, :destroy, :show]
  end
end