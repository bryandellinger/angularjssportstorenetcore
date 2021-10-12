(function () {
    'use strict';

    angular.module("cart")
        .factory("cartFactory", cartFactory);
    


    function cartFactory() {

        var cartData = [];
        var factory = {
            addProduct: addProduct,
            removeProduct: removeProduct,
            getProducts: getProducts
        };
        return factory;

        function addProduct (id, name, price) {
                var addedToExistingItem = false;
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id == id) {
                        cartData[i].count++;
                        addedToExistingItem = true;
                        break;
                    }
                }
                if (!addedToExistingItem) {
                    cartData.push({
                        count: 1, id: id, price: price, name: name
                    });
                }
            }

         function removeProduct(id){
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id == id) {
                        cartData.splice(i, 1);
                        break;
                    }
                }
            }

           function getProducts() {
                return cartData;
            }
        }
})();