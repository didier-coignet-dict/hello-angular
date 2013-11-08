'use strict';

angular.module('stApp').service('UserService', function Userservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var user = {
        login   : 'ylombard@sqli.com',
        pass    : '1234'
    };

    var login = function(login, pass) {

        console.log(login, pass);

        return login === user.login && pass === user.pass;

    };

    return {
        login: login
    };
});
