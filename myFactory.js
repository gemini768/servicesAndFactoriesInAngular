angular.module('myApp').factory('myFactory', function () {
   
   var obj={};
   obj.factoryMsg="Welcome to Factory world";
   obj.setMsg=function(inputMessage){
       obj.factoryMsg=inputMessage;
   }
   return obj;
});

// As we know, a factory can return an object, value or function