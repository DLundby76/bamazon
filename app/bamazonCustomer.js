var bamCustomer = function(dbCon){
  var that = {};


    function getAllProducts(){
      return new Promise(function(resolve, reject){
        dbCon.query('SELECT * FROM products', function(err, results, fields){
          if(err) reject(err);

          resolve(results);
        })
      })
    }
    function itemSelction(){
      var productSelect = {
        type: 'list',
        message: 'What item would you like to purchase?  Please enter item ID',
        name: 'item_id'
      };
    };
    that.getAllProducts = getAllProducts;
  return that;
};

module.exports = bamCustomer;
