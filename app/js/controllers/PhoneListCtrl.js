blogApp.controller('PhoneListCtrl',['$scope','$http',
	function($scope,$http){
		$scope.phones = [
		    {
			  "age": 13,
			  "id": "motorola-defy-with-motoblur",
			  "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122",
			  "snippet": "Are you ready for everything life throws your way?",
			  "id": "motorola-defy-with-motoblur",
			   "imageUrl": "img/phones/motorola-defy-with-motoblur.0.jpg"
			 },
			 {
			  "age": 13,
			  "id": "motorola-defy-with-motoblur",
			  "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122",
			  "snippet": "Are you ready for everything life throws your way?",
			  "id": "motorola-defy-with-motoblur",
			   "imageUrl": "img/phones/motorola-defy-with-motoblur.0.jpg"
			 },
			  {
			  "age": 13,
			  "id": "motorola-defy-with-motoblur",
			  "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122",
			  "snippet": "Are you ready for everything life throws your way?",
			  "id": "motorola-defy-with-motoblur",
			   "imageUrl": "img/phones/motorola-defy-with-motoblur.0.jpg"
			 }
		  ];

		  // $http.get('app/js/data/phones.json').success(function(data){
		  // 	$scope.phones = data;
		  // });

		$scope.orderProp = 'age';
		console.log("test");
	}]);