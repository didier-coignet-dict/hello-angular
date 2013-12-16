angular.module('l10n-fr-fr', ['l10n']).config(['l10nProvider', function(l10n){

    l10n.add('fr-fr', 	{
        translateTo: 'english',
        list: {
            title: 'Bonjour Angular',
            description: 'Mon bac à sable AngularJS'
        },
        detail: {
            'chaussures-vertes': {
                title: 'Chaussures vertes',
                description: 'Description chaussures vertes'
            },
            'chaussures-rouges': {
                title: 'Chaussures rouges',
                description: 'Description chaussures rouges'
            },
            'canodolly2': {
                title: 'Canodoly',
                description: 'Description Canodoly'
            },

            'spec': 'Caractéristiques',
            'test': 'Test FR'
        }
    });

}]);