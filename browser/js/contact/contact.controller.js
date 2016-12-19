app.controller('contactController', function($scope, posts, feedBackFactory) {
    $scope.posts = posts;
    $scope.submitForm = function(data) {
        console.log('Submitting', data)
        feedBackFactory.postComment(data)
            .then(function(newPost) {

                console.log(newPost)
                $scope.posts[$scope.posts.length] = newPost
                console.log($scope.posts)
            })
            .catch()

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
