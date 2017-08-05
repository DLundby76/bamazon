var mysql = require('mysql');
var columnify = require('columnify');
var config = require('./config');
var prompt = require('./app/prompt');
var connection = mysql.createConnection(config);
var bamCustomer = require('./app/bamazonCustomer')(connection);


connection.connect(function(err){
  if(err) throw err;

  console.log("we are connected");
  init();

});

  var init = function(){
    var personality = {
      type: 'list',
      message: 'Are you a Customer, Manager, or Supervisor?',
      choices: ['Customer', 'Manager', 'Supervisor'],
      name: 'user'
    };
    prompt(personality).then(function(answer){
      switch (answer.user) {
        case 'Customer':
          break;
        case 'Manager':
          break;
        case 'Supervisor':
          break;
          default:
          return;
        }
    });
  }
