module.exports = function () {

  return {
      restrict: 'E',
      scope: {
        height: '@'
      },
      replace: 'true',
      templateUrl: '/custom-elements/img/tools/aurelia.html'
  };
};
