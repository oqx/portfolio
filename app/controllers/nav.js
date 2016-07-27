module.exports = function($scope) {

  $scope.toggleSideBar = function() {
    var body = document.querySelector('.body');
    var hasClass = body.classList.contains('sidebar-is-minimized');
    if (hasClass) {
      body.classList.remove('sidebar-is-minimized');
    } else {
      body.classList.add('sidebar-is-minimized');
    }
  };

  $scope.openTerminalShelf = function() {
    var homeClass = document.querySelector('.terminal');
    var hasClass = homeClass.classList.contains('is-open');
    var terminalOutput = document.querySelector('.output');
    if (hasClass) {
      homeClass.classList.remove('is-open');
      terminalOutput.innerHTML = '';
    } else {
      homeClass.classList.add('is-open');
    }
  };


};
