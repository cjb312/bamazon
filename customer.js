// requiring mysql, inquirer, and table npms
var mysql = require("mysql");

var inquirer = require("inquirer");

var Table = require("cli-table");

//conncecting with mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB"

});

connection.connect();

//displaying inventory of products
var inventory = function() {

    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

        // creating table with the cli-table package
        var table = new Table({
            head: ["Item ID", "Product Name", "Department", "Price", "Stock Quantity"]
        });


        // displaying the products being sold with their properties
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name,
                res[i].price, res[i].stock_quantity
            ]);
        }
        console.log(table.toString());

        //using inquirer to obtain the product the user wants to buy by gathering the item ID
        inquirer.prompt([{
            name: "itemId",
            type: "input",
            message: "Enter the ID of the item you would like to purchase:",
            //function off of the inquirer npm page that is used for a true false value
            validate: function(input) {
                if (isNaN(input) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            //obtaining desired user quantity of the produc they would like to purchase
            name: "quantity",
            type: "input",
            message: "Enter the quantity of the item you would like to purchase:",
            //function off of the inquirer npm page that is used for a true false value
            validate: function(input) {  
             if (isNaN(input) === false) {
                 return true;
             } else {
                 return false;
             }
            }
        }]).then(function(result) {
            var itemSelected = result.itemId;
            var itemQuantity = result.quantity;
            order(itemSelected, itemQuantity);
        });
    });
};
///fullfilling order and updating the database after a purchase is made
function order(ID, userQuantity) {

    connection.query("SELECT * FROM products WHERE item_id = " + ID, function(err, res) {
        if (err) throw err;
        //if user quantity is less than or equal to the currentn stock_quantity the purchase will be made
        if (userQuantity <= res[0].stock_quantity) {
            var totalCost = res[0].price * userQuantity;

            console.log("Your total is $" + totalCost + ". Thank you for your order!");

            //updating the database stock_quantity 
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + userQuantity + " WHERE item_id = " + ID);
        
        } else {
            // informing user their desired quantity is not possible to fullfill with the current inventory
            console.log("We currently do not have enough stock to fulfill that order. Please refer to the stock amount displayed on the table.");
        };
        
        inventory();
    })
}

inventory();