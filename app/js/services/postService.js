blogApp.factory('postService',function($http){

	var Post = function(data) {
		angular.extend(this, data);
	}

	var posts = {};
	$http.get('app/js/data/phones.json').then(function(data){
	  	posts.array = data.data;
	});
	return posts;

});


// angular.module('myApp').factory('Book', function($http) {
//   // Book is a class which we can use for retrieving and 
//   // updating data on the server
//   var Book = function(data) {
//     angular.extend(this, data);
//   }

//   // a static method to retrieve Book by ID
//   Book.get = function(id) {
//     return $http.get('/Book/' + id).then(function(response) {
//       return new Book(response.data);
//     });
//   };

//   // an instance method to create a new Book
//   Book.prototype.create = function() {
//     var book = this;
//     return $http.post('/Book/', book).then(function(response) {
//       book.id = response.data.id;
//       return book;
//     });
//   }

//   return Book;
// });

// var AppController = function(Book) {
//   // to create a Book
//   var book = new Book();
//   book.name = 'AngularJS in nutshell';
//   book.create();

//   // to retrieve a book
//   var bookPromise = Book.get(123);
//   bookPromise.then(function(b) {
//     book = b;
//   });
// };