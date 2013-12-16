angular.module('l10n-en-us', ['l10n']).config(['l10nProvider', function(l10n){

    l10n.add('en-us', 	{
        translateTo: 'français',
        list: {
            title: 'Hello Angular',
            description: 'My AngularJS sandbox'
        },
        detail: {
            'chaussures-vertes': {
                title: 'Green socks',
                description: 'Green socks description'
            },
            'chaussures-rouges': {
                title: 'Red socks',
                description: 'Red socks description'
            },
            'canodolly2': {
                title: 'Canodoly',
                description: 'Canodoly description'
            },

            'spec': 'Specifications',
            'test': 'Test EN'
        }
    });

}]);