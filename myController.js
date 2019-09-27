angular.module('myApp').controller('myController', function ($scope, myService, myFactory) {
    

    var myController=this;
    myController.factoryMsg = myFactory;
    myController.serviceMsg=myService;
    myController.setMessage=function(inputMessage){
    	myFactory.setMsg(inputMessage);
   }


});