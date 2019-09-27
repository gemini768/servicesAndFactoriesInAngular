angular.module('myApp').controller('otherController', function ($scope, myService, myFactory) {
    

  var otherController=this;  
  otherController.factoryMsg = myFactory;


});