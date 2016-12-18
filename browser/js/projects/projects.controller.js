app.controller('projectController', function($scope, allProjects) {

	console.log(allProjects)

    $scope.projects = allProjects
})



// [
//         { id: 1, state: "Portfolio", content: "This website that you are currently viewing was create by me using Bootstrap, Angular, PostgreSQL, Express.js and Node.js ", label: "My Portfolio" },
//         { id: 2, state: "Imvue", content: "Imvue is a mobile website designed to work with android phones to create drawing projects using HTML5 Canvas API. My team also used the phone's gyroscope and gps to allow users to save their projects to a geolocation. They can then share these projects with other users", label: "ImVue" },
//         { id: 3, state: "Marque", content: "This was a e-commerce site simulating selling concert tickets. I worked mostly on the Artist feature from the front-end to the back-end. I also implemented user authentication and authorization", label: "Marque" }
//     ]

app.controller('singleProjectController', function($scope, projectFactory,currentProject) {

	console.log('LOADED SINGLE PROJECT CONTROLLER')
    $scope.currentProject = currentProject;
    console.log('CURRENT PROJECT',$scope.currentProject)
})
