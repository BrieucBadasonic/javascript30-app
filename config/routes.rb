Rails.application.routes.draw do
  root "pages#home"
  get "/pages/challenge01", to: 'pages#challenge01', as: :challenge01
  get "/pages/challenge02", to: 'pages#challenge02', as: :challenge02
  get "/pages/challenge03", to: 'pages#challenge03', as: :challenge03
  get "/pages/challenge04", to: 'pages#challenge04', as: :challenge04
  get "/pages/challenge05", to: 'pages#challenge05', as: :challenge05
  get "/pages/challenge06", to: 'pages#challenge06', as: :challenge06

end
