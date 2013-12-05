'use strict';

angular.module('stApp')
  .service('ProductService', function Productservice($filter) {
    // AngularJS will instantiate a singleton by calling "new" on this function

        var products = [

            {
                id      : 'chaussures-rouges',
                name    : 'Produit rouge',
                url     : 'http://www.hypebeast.com/image/2008/10/lupe-fiasco-product-red-converse-all-star-01.jpg',
                desc    : 'lorem ipsum dolor sit amet consectetur adipiscing elit',
                price   : 15,
                color   : 'red'
            },

            {
                id      : 'chaussures-vertes',
                name    : 'Produit vert',
                url     : 'http://www.hypebeast.com/image/2008/10/lupe-fiasco-product-red-converse-all-star-01.jpg',
                desc    : 'lorem ipsum dolor sit amet consectetur adipiscing elit',
                price   : 10,
                color   : 'green'
            },

            {
                id      : 'canodolly1',
                name    : 'Canodolly bleu',
                url     : 'http://www.ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123',
                desc    : 'Nam lacus felis, placerat sed est non, interdum imperdiet massa',
                price   : 25,
                color   : 'blue'
            },

            {
                id      : 'canodolly2',
                name    : 'Canodolly rouge',
                url     : 'http://www.ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123',
                desc    : 'Nam lacus felis, placerat sed est non, interdum imperdiet massa',
                price   : 20,
                color   : 'red'
            }


        ];

        return {
            products : products,

            getById: function(id) {

                return $filter('filter')(products, {id: id})[0];

            }
        };

  });
