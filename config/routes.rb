Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # courses = books  |  course = book  |  location = author
  get 'get_books_by_author/:author_id', to: 'books#get_books_by_author'  
  get '/book_search' => 'books#book_search'
  
end
