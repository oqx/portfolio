module.exports = function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/home.html'
    })
    .when('/portfolio', {
      templateUrl: '/views/portfolio.html'
    })
    .when('/contact', {
      templateUrl: '/views/contact.html'
    });
};
