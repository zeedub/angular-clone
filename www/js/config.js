require.config({
    baseUrl: '/js',
    shim: {
        bootstrap: [
            'jquery'
        ],
        angularAMD: [
            'angular'
        ],
        angularRoute: [
            'angular'
        ],
        angularUiRouter: [
            'angular'
        ],
        ngload: [
            'angularAMD'
        ],
        app: [
            'angular',
            'angularUiRouter'
        ],
        'ui.bootstrap': [
            'angular'
        ]
    },
    paths: {
        bootstrap: 'lib/bootstrap/dist/js/bootstrap',
        jquery: 'lib/jquery/dist/jquery',
        modernizr: '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr',
        requirejs: 'lib/requirejs/require',
        angularAMD: 'lib/angularAMD/angularAMD',
        angular: 'lib/angular/angular.min',
        angularUiRouter: '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router',
        ngload: 'lib/angularAMD/ngload.min',
        app: '../app/app',
        angularRoute: 'lib/angular-route/angular-route',
        'ui.bootstrap': 'lib/angular-bootstrap/ui-bootstrap.min'
    },
    packages: [

    ],
    deps: [
        'modernizr',
        'app'
    ]
});
