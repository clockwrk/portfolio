app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/js/home/home.html'
    })
})


// $urlRouterProvider.otherwise(function($injector) {
//     var $state = $injector.get('$state');
//     $state.go('stateA');
// });`
