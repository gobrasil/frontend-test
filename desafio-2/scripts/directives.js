'use strict';

angular.module('app.directive', []).directive('phoneFormat', phoneDirective);

function phoneDirective() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if(text) {
                    element.on('keypress', function(e) {
                        var transformedInput = text;
                        var status = e.which;

                        if(status !== 8) {
                            console.log(transformedInput.length);

                            if(transformedInput.length === 2) {
                                transformedInput = "("+transformedInput;
                            }

                            if(transformedInput.length === 3) {
                                transformedInput = transformedInput+") ";
                            }

                            if(transformedInput.length === 9) {
                                transformedInput = transformedInput+"-";
                            }
                        }

                        text = text.replace( /^\D+/g, '');
                        if(text.length === 0) {
                            transformedInput = "";
                        }

                        if (transformedInput !== text) {
                            ngModelCtrl.$setViewValue(transformedInput);
                            ngModelCtrl.$render();
                        }

                        return transformedInput;
                    });
                }

                return undefined;
            }

            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}