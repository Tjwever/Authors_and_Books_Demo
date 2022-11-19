document.addEventListener('DOMContentLoaded', function (e) {
   const author = document.getElementById('author')
   const book = document.getElementById('book')

   // add the 'Book' option tag back in the HTML w/ dynamic values of ID and whats visible
   const defaultBook = (id, html) => {
      let opt = document.createElement('option')
      opt.value = id
      opt.innerHTML = html
      book.appendChild(opt)
   }

   // removing all the option tags for book
   const removeBookOptions = () => {
      while (book.options.length != 0) {
         book.remove(0)
      }
   }

   // when first loaded, all books will be displayed in the book dropdown
   // this will remove everything
   if (book.value === '') {
      removeBookOptions()
      defaultBook(0, 'Book')
   }

   // change event on the author dropdown
   author.addEventListener('change', (e) => {
      let id_value_string = e.target.value
      // a reset, if user selects default then we will remove everything and default back
      if (
         id_value_string === '' ||
         id_value_string === null ||
         id_value_string === 0
      ) {
         removeBookOptions()
         defaultBook(0, 'Book')
      } else {
         // fetch will call the controller which holds our data
         fetch(`/get_books_by_author/${e.target.value}`)
            .then((response) => response.json())
            .then((data) => {
               removeBookOptions()
               defaultBook(0, 'Book')
               // loop through all our data and display only books we need
               data.forEach((obj) => {
                  defaultBook(obj.id, obj.name)
               })
            })
            .catch((error) => console.log(error))
      }
   })
})
