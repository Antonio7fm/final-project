Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
<<<<<<< HEAD
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :destroy]
    resources :groups, only: [:index, :show, :create, :destory]
    resources :events, only: [:index, :show, :create, :destory]
    resource :session, only: [:create, :destroy, :show]
  end
end
=======
end
>>>>>>> 8345681817276c871f0a3317878e916e324b1460
