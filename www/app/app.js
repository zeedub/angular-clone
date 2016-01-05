define(['angularAMD', 'angularUiRouter'], function (angularAMD) {

    // the app
    var app = angular.module('dsc', ['ui.router']);

    // =================================================
    // States
    // =================================================
    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider)
        {
            $stateProvider

                // home
                .state(
                'home', angularAMD.route({
                    url: '/home',
                    templateUrl: '/app/components/home/home_view.html',
                    controllerUrl: '../app/components/home/home_ctrl'
                })
            )


                // profile
                .state(
                'foo', angularAMD.route({
                    url: '/foo',
                    templateUrl: '',
                    controllerUrl: ''
                })
            );

            $urlRouterProvider.otherwise('home');
        }
    ]);


    return angularAMD.bootstrap(app);

});