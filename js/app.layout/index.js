import angular from 'angular';

import HomeController from './controllers/home.controller';

angular
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .directive('homeScreen', homeScreen)
;

function homeScreen () {
  return {

    restrict: 'AE', // E = Element, A = Attribute
    replace: true,
    scope: {
      i: '=image'
    },
    template: `<div class='imgThumbs'>
        <h4>{{i.title}}</h4>
        <img src={{i.url}}>
        <h5>{{i.caption}}</h5>


    </div>`,
    controller: 'HomeController as vm'
    }
    
  }