
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']); // These Dependencies are the list of mudles that myApp uses.

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) { // Here we can place the services, and ngular will use Dependency injection
// We are injecting services into our controller
    $scope.name = 'John'; // Setting a value

    $timeout(function(){
        $scope.name = 'Quinten';
    }, 3000);
}]);





    // $scope.formattedname = $filter('uppercase')($scope.name); // Using the filter service. Give it a filter, then pass a string.
    // console.log($resource);
    // $log.info($scope.name);// use the log function
    // $log.info($scope.formattedname);
    // console.log($resource);
    // $log.log('Hello.');
    // $log.info('here is some information.');
    // $log.warn('Warning!');
    // $log.debug('Some debug information.');
    // $log.error('This was an error!!!');


// var Person = function(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
//
// function logPerson()
// {
//     var john = new Person('John', 'Doe');
//     console.log(john);
// }
//
// logPerson();
//
//
// function logPerson(person){
//     console.log(person);
// }
// var john = new Person('John', 'Doe');
// logPerson(john);