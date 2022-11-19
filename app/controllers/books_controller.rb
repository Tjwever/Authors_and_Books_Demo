class BooksController < ApplicationController
    def get_books_by_author
        @books = Book.where("author_id = ?", params[:author_id])
        respond_to do |format|
          format.json { render :json => @books }
        end
      end 
      def book_search
        if params[:author].present? && params[:author].strip != ""
          @books = Book.where("author_id = ?", params[:author])
        else
          @books = Book.all
        end
      end
end
