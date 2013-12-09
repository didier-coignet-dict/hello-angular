'use strict';

// Création des modules pour les directives, filters et module général
angular.module('lib.filter', []);
angular.module('lib.directive', ['lib.filter']);
angular.module('lib', ['lib.directive']);