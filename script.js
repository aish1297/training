(function(){
  
  var app = angular.module("myApp", []);
  app.controller("tableCtrl", function(){
    var vm = this;
    
    vm.records = [
      {firstname: 'Aishwarya', lastname:'M', email:'aish@gmail.com', city: 'Chennai'},
      {firstname: 'Naznin', lastname:'A', email:'naz@gmail.com', city: 'Chennai'},
      {firstname: 'Harish', lastname:'K', email:'harish@gmail.com', city: 'Chennai'},
      {firstname: 'Aakash', lastname:'M', email:'aakash@gmail.com', city: 'Chennai'}
      ]
    
    vm.add = function(){
      vm.records.push({firstname: '', lastname: '', email: '', city:'' });
    }
     vm.remove = function(index){
      vm.records.splice(index, 1);
    }
  })
  
})();