'use strict';

angular.module('stApp')
  .service('Productservice', function Productservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function

        var products = {

            produit1: {
                id      : 'produit1',
                name    : 'Chaussures',
                url     : 'http://www.hypebeast.com/image/2008/10/lupe-fiasco-product-red-converse-all-star-01.jpg',
                desc    : 'lorem ipsum dolor sit amet consectetur adipiscing elit'
            },

            produit2: {
                id      : 'produit2',
                name    : 'Canodolly',
                url     : 'http://www.ekit.co.uk/GalleryEntries/eCommerce_solutions_and_services/MedRes_Product-presentation-2.jpg?q=27012012153123',
                desc    : 'Nam lacus felis, placerat sed est non, interdum imperdiet massa'
            }

        };

        return {
            products : products
        };

  });
