var bamCustomer = function(dbCon){
  var that = {};
  var prompt = require('./prompt');
  var columnify = require('columnify');
  var allProductInfo;


    function getAllProducts(){
      // return new Promise(function(resolve, reject){
      // database connection and query into MySQL Products table
        dbCon.query('SELECT * FROM products', function(err, results, fields){
          if(err) console.warn(err);
          // breaks up table data and seperates it with a |
          var columns = columnify(results, {columnSplitter: '|'});
          console.log(columns);
          allProductInfo = results;
          itemSelction(results);
        })
    }
    // Starts the function that prompts the customer to select an item through the table ID.
    function itemSelction(){
      var productSelect = {
        type: 'input',
        message: 'What item would you like to purchase?  Please enter item ID',
        name: 'item_id'
      };
      prompt(productSelect).then(function(product){
        console.log(product);
        askQuanity(product.item_id)
      })
    };
    // Starts the function that prompt the customer to choice the quantity of the items they want to buy
    function askQuanity(itemID){
      var quantitySelect = {
      type: 'input',
      message: 'How many would you like to buy?',
      name: 'quantity'
    };
      prompt(quantitySelect).then(function(answer){
        checkForQuanity(itemID, answer.quantity)
      });
      };

      function checkForQuanity(item_id, quantity){
        // console.log("im looking at what?", typeof item_id, quantity);

        allProductInfo.filter(function(item){

          var parsedID = parseInt(item_id, 10);
          // console.log(' WHAT IS THE PARSED ID ', parsedID, "and item id from object", item);
          // console.log(parsedID);
          if(item.id === parsedID){
            if(item.stock_quantity > quantity) {
              // finish transaction
            }
                  console.log("We have a item!!!", item);

          };

        });

      };



    that.getAllProducts = getAllProducts;
  return that;
};

module.exports = bamCustomer;
