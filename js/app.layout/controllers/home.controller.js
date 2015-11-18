let HomeController = function($http, PARSE){
  let vm = this;
  let url = PARSE.URL + 'classes/images'
  vm.imageList= [];
  $http.get(url, PARSE.CONFIG).then((res)=>{
    
    vm.imageList= res.data.results;
    
  })
}
HomeController.$inject= ['$http', 'PARSE']
export default HomeController;