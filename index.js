// Write your solution in this file!
// Declare a variable in global scope called customerName and assign it the value 'bob'
var customerName = 'bob';

// Function to access the global customerName variable and uppercase it
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare a variable called bestCustomer in global scope and assign it to be 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to change the bestCustomer variable in global scope to 'maybe bob'
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value
const leastFavoriteCustomer = 'some initial value';

// Function to attempt to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'attempted change'; // This will throw an error because constants cannot be reassigned
}

// Exporting functions
module.exports = {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    leastFavoriteCustomer,
    changeLeastFavoriteCustomer
};
