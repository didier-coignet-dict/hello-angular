'use strict';

angular.module('stApp')
  .service('Sextoyservice', function Sextoyservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function

        var toys = {

            menottes: {
                id      : 'menottes',
                name    : 'Menottes',
                url     : 'http://www.touslescadeaux.com/images/produits/menottes-fourrure-4.jpg',
                desc    : 'lorem ipsum dolor sit amet consectetur adipiscing elit'
            },

            canodolly: {
                id      : 'canodolly',
                name    : 'Canodolly',
                url     : 'http://www.objets-publicitaires-pro.com/images/objet-publicitaire/produit/large/canard-publicitaire-equitation-jaune.jpg',
                desc    : 'Nam lacus felis, placerat sed est non, interdum imperdiet massa'
            }

        };

        return {
            toys : toys
        };

  });
