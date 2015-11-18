let AddController= function($http, PARSE, $state){
  let url = PARSE.URL + 'classes/images';

  let vm= this;
  let Img = function(obj){
    this.url = obj.url;
    this.title=obj.title;
    this.caption= obj.caption;
  }
  vm.addImg = function(wat){
    let x = new Img(wat);
    $http.post(url, x, PARSE.CONFIG).then((res)=>{
      $state.go('root.home');
    })
  };

  
};
AddController.$inject=['$http', 'PARSE', '$state'];
export default AddController;