

app.controller('contactController', function($scope, feedBackFactory) {


    $scope.posts = posts;



    $scope.submitForm = function(data) {
        console.log('Submitting', data)


        feedBackFactory.postComment(data)

        console.log($scope.userForm)

        $scope.user = null

        $scope.userForm.$setPristine(true)
    }

    $scope.clear = function() {
        $scope.user = null
        $scope.userForm.$setPristine(true)
    }


    $scope.submit = function() {
        if ($scope.message && $scope.email && $scope.name) {

            controllerFactory.sendMessage($scope.name, $scope.email, $scope.message)


        }
    }

})
