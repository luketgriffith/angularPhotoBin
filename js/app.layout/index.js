import angular from 'angular';
import $ from 'jquery';
import HomeController from './controllers/home.controller';
import HomeService from './controllers/home.service';
angular
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .service('HomeService', HomeService)
  .directive('homeScreen', homeScreen)
;

function homeScreen ($timeout) {
  return {

    restrict: 'AE', // E = Element, A = Attribute
    replace: true,
    scope: {
      i: '=image'
    },
    template: `<div class='imgThumbs' ng-dblclick="vm.likeClick()" ng-init="vm.likes=0">
        <h4>{{i.title}}</h4>
        <i id="icon" class="fa fa-heart"></i>
        <img ng-src={{i.url}}>
        <h5>{{i.caption}}</h5><span>Likes: {{vm.likes}}</span>


    </div>`,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
        element.on('dblclick', function(){
          let x = element.find('fa')
          x.addClass('displayed');
          $timeout(

            x.removeClass('displayed')
          , 1000)
        })
      
      
          
    }
  }
}