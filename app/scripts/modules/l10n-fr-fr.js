angular.module('l10n-fr-fr', ['l10n']).config(['l10nProvider', function(l10n){

    l10n.add('fr-fr', 	{
        list: {
            title: 'Hello Angular',
            description: 'My AngularJS sandbox'
        },
        detail: {
            'chaussures-vertes': {
                title: 'Chaussures vertes',
                description: 'description'
            },
            'chaussures-rouges': {
                title: 'Chaussures rouges',
                description: 'description'
            },
            'canodolly2': {
                title: 'Canodoly',
                description: 'description'
            }
        }
    });

}]);