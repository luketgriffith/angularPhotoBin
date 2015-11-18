let HomeController = function($http, PARSE, HomeService){
  let vm = this;
  let url = PARSE.URL + 'classes/images'
  vm.imageList= [];
  $http.get(url, PARSE.CONFIG).then((res)=>{
    
    vm.imageList= res.data.results;
    
  })
  vm.likeClick= function(){
    vm.likes=vm.likes+1;
  }
}
HomeController.$inject= ['$http', 'PARSE', 'HomeService']
export default HomeController;