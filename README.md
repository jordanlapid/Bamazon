# Bamazon

## CLI and Item Selection
* When the app is run, the user is greeted and prompted to select a product from the linked MySQL database.

![alt text](https://github.com/jordanlapid/Bamazon/blob/master/images/1.PNG?raw=true "CLI")

## Quantity - User Input
* After the user selects an item from the list, a second question is prompted which accepts a user input for quantity.

![alt text](https://github.com/jordanlapid/Bamazon/blob/master/images/2.PNG?raw=true "User Input")

## Order Verification
* The quantity entered is checked against the MySQL database to ensure that the order can be fulfilled.  
* If the quantity entered is greater than the current stock in MySQL or if the quantity entered is less than 1, the user will be notified.

![alt text](https://github.com/jordanlapid/Bamazon/blob/master/images/4.PNG?raw=true "Verification")


## Successful Checkout
* If the order can be fulfilled, the product name, unit price, quantity and total price will be displayed.  
* The MySQL database will be updated based on the quantity ordered.

![alt text](https://github.com/jordanlapid/Bamazon/blob/master/images/3.PNG?raw=true "Checkout")
