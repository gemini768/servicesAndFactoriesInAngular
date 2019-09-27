


angular.module('myApp').service('myService', function () {
    var _self=this;
   _self.serviceMsg="Welcome to service world";
   _self.setMsg=function(inputMessage){
       _self.factoryMsg=inputMessage;
   }
});
