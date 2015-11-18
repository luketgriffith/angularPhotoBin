import angular from 'angular';

import AddController from './controllers/add.controller';
import PARSE from '../app.core/constants/parse.constant';
angular
  .module('app.images', [])
  .controller('AddController', AddController)
  .directive('addImage', addImage)
  .constant('PARSE', PARSE)
;

function addImage () {
  return {

    restrict: 'AE', // E = Element, A = Attribute
    replace: true,
    scope: {
      addImg: '='

    },
    template: `
      <div class="addImgs">
        <h3>Add an Image</h3>
        <form ng-submit="vm.addImg(wat)">
        <input type="text" ng-model="wat.url" placeholder="Image URL">
        <input type="text" ng-model="wat.title" placeholder="Image Title">
        <input type="text" ng-model="wat.caption" placeholder="Image Caption">
        <button>Add</button>
        </form>
      </div>`,
    controller: 'AddController as vm'
    }
    
  }