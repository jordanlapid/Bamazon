var mysql = require("mysql");

var inquirer = require("inquirer");

var product;
var price;
var quantity;
var stock;
var items = [];
var productArray = [];

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "redace21",
  database: "bamazon"
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("Welcome to Bamazon!" + "\n");
  startBamazon();
});

function startBamazon(){
	connection.query("SELECT * FROM products", function(err, results) {
    	if (err) throw err;
    	listItems(results);
	});
}


function listItems(results){
	for (var i = 0; i < results.length; i++){
		items[i] = results[i].item_id + " | " + results[i].product_name + " | " + results[i].department_name + " | " + results[i].price + " | " + results[i].stock_quantity;
	}
	inquirer.prompt([
		{
			name:"listAll",
			type:"list",
			choices: items,
			message: "What would you like to purchase?" + "\n" + "\n" + "ID | Product | Department | Price | Quantity"
		},
		{
			name:"quantity",
			type:"input",
			message:"How many would you like to buy?"
		}
	]).then(function(answer){
        productArray = answer.listAll.split(" | ");
        product = productArray[1];
        price = productArray[3];
        stock = parseInt(productArray[4]);
        quantity = parseInt(answer.quantity);

        if(quantity === 0 || quantity < 1){
        	console.log("Please enter a quantity greater than 0.")
        } else if (quantity > stock) {
        	console.log("Insufficient Stock!")
        } else {
        	checkOut(price,quantity);
        }
		connection.end();
	});

}

function checkOut(price, quantity){
	console.log("\n" + "\n" + "Product: " + product + "\n" + "Price: " + price + "\n" + "Quantity: " + quantity + "\n" + "Total Price: " + price * quantity + "\n" + "\n" );

	connection.query(
		"UPDATE products SET ? WHERE ?",
		[
			{
				stock_quantity: stock - quantity
			},
			{
				product_name: product
			}
		],
		function(error) {
		if (error) throw err;
		console.log("Thank you. Come Again!");
		}
    );
}


