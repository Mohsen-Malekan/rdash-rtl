/**
 * Widget Header Directive
 */

angular
    .module('app')
    .directive('rdWidgetHeader', rdWidgetTitle);

function rdWidgetTitle() {
    var directive = {
        requires: '^rdWidget',
        scope: {
            title: '@',
            icon: '@'
        },
        transclude: true,
        template: '<div class="widget-header"><div class="row"><div class="pull-right"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-left" ng-transclude></div></div></div>',
        restrict: 'E'
    };
    return directive;
};