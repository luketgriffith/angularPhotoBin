let HomeService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/car';

  this.like = like;

  function like (x) {
     x = x + 1;
  }

};

HomeService.$inject = ['$http', 'PARSE'];

export default HomeService;