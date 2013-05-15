'use strict';

/* Controllers */

/*
function ProjectCtrl($scope, $http) {
  	var url = "http://localhost:8080/ax5spike/rest/project";
  	$scope.listProjects = function() {
  		$http.get(url).success(
  			function(data) {
  				$scope.projects = data;
  			}
  		).error(function(err) {
  			console.log("Cannot query projects" + err);
  		});
  	};
  	$scope.listProjects();
}
*/

function ProjectCtrl($scope, $dialog, Project) {
	$scope.projects = Project.query();

	$scope.deleteProjectOpts = {
	    backdrop: true,
	    keyboard: true,
	    backdropClick: true,
	    templateUrl:  'template/dialog/confirmDialog.html', // OR: templateUrl: 'path/to/view.html',
	    controller: 'DeleteProjectCtrl'
	};

	$scope.openConfirmBox = function(project) {
    	var d = $dialog.dialog({
    		dialogFade: true,
    		resolve: { 
    			project: function() {
    				return angular.copy(project); 
    			} 
    		} 
    	});
    	d.open('template/dialog/confirmDialog.html', 'DeleteProjectCtrl').then(function(project) {
      		if(project.id)
      		{
        		//alert('dialog closed with result: ' + result);
        		Project.delete({ id: project.id });
        		$scope.projects = Project.query();
      		}
    	});
  	};

  	$scope.updateProjectName = function(project) {
  		//alert( 'update project name to ' + project.name + ' with id ' + project.id );
  		Project.update({ id: project.id, name: project.name });
  	}

  	$scope.openNewProjectForm = function() {
    	var d = $dialog.dialog({dialogFade: true});
    	d.open('template/dialog/newProjectDialog.html', 'NewProjectCtrl').then(function(project) {
      		if(project.name)
      		{
        		//alert('dialog closed with result: ' + project.name);
        		Project.create({ name: project.name });
        		$scope.projects = Project.query();
      		}
    	});
  	}
};

// the dialog is injected in the specified controller
function DeleteProjectCtrl($scope, dialog, project) {
	$scope.item = project;
	$scope.message = 'Are you sure you want to delete project - ' + $scope.item.name;

  	$scope.close = function() {
  		dialog.close();
  	};

  	$scope.confirmAndClose = function(project) {
  		dialog.close(project);
  	};
}

function NewProjectCtrl($scope, dialog) {
	$scope.master = {};
  	$scope.close = function() {
  		dialog.close();
  	};	

  	$scope.confirmAndClose = function(project) {
  		//$scope.master=angular.copy(project);
  		dialog.close(project);
  	};
}

