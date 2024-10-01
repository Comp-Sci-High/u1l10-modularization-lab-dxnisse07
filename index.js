// Follow the instructions for each section below.

// The functions you will be writing will all be modifying the array groceryList below.
// Leave it alone.
let groceryList = ["Milk", "Oreos"];

// Part 1 - Modularizing
// In this section, you will use the existing code and turn them into functions.
// Make sure to leave the console logs as part of the function.
// What each function returns will be specified.
// Test your functions as you go.
// Remember to name your functions appropriately, identify the input(s) (if any), and return what's specified.

//////////////////////////////////////////////////////////////////////
// 1. Create a function that adds an item to the list.
 // Return the new item.
function groceryListAdder(ItemAdded){
  groceryList.push(ItemAdded);
  console.log("item Added :"+ ItemAdded)
  return ItemAdded
}
// Code to modularize:
// let item1 = "Animal Crackers";

let item2 = "Avocados";
groceryList.push(item2);
console.log("Item added: " + item2);

let item3 = "Frozen Pizza";
groceryList.push(item3);
console.log("Item added: " + item3);

//////////////////////////////////////////////////////////////////////
2. // Create a function that removes the last item from the list.
 //Return the removed item.
function groceryListremover(){
   groceryList.pop()
   console.log("item removed")
   return groceryList.length
}
// Code to modularize:
let itemToRemove1 = groceryList[groceryList.length - 1];
groceryList.pop();
console.log("Item removed: " + itemToRemove1);

let itemToRemove2 = groceryList[groceryList.length - 1];
groceryList.pop();
console.log("Item removed: " + itemToRemove2);

//////////////////////////////////////////////////////////////////////
// 3. Create a function that updates a specific item in the list.
// Return the updated item.

function groceryListUpdate(newItem1,indexToUpdate1){
  let oldItem1 = groceryList[indexToUpdate1];
groceryList[indexToUpdate1] = newItem1;
console.log("Item updated from " + oldItem1 + " to " + newItem1);
}

// Code to modularize:
let indexToUpdate1 = 0;
let newItem1 = "Bananas";


let indexToUpdate2 = 2;
let newItem2 = "Olive Oil";
let oldItem2 = groceryList[indexToUpdate2];
groceryList[indexToUpdate2] = newItem2;
console.log("Item updated from " + oldItem2 + " to " + newItem2);

//////////////////////////////////////////////////////////////////////
// 4. Create a function that shows the current grocery list.
// Returns the grocery list array.

function currentGroceryList(){
  if (groceryList.length === 0) {
  console.log("The grocery list is empty.");
} else {
  console.log("Grocery List: " + groceryList);
}
  return groceryList.length
}

// Code to modularize:


//////////////////////////////////////////////////////////////////////

// Part 2 - Add new features
// Now that you've modularized the existing code, it's time to add two new features.

//////////////////////////////////////////////////////////////////////
// 1. Write a function that logs how many items you have left in the list.
// It should log the following "The grocery list has x item(s).", with x being how many items are left.
// Returns the grocery list length.

function itemsLeft(){
  console.log("The grocery list has " + groceryList.length )
  return groceryList.length
}
//////////////////////////////////////////////////////////////////////
// 2. Write a function that clears the whole grocery list.
// It should log the following "The grocery list is now empty."
// Returns the empty grocery list.
function clearingList(){
   groceryList= []
   console.log("The grocery list is now empty")
  return groceryList
}
//////////////////////////////////////////////////////////////////////
// Part 3 - Calling Functions
// You want to create a charcuterie board so now it's time to call the functions you wrote in Part 1 and Part 2.
// Your goal is to achieve the console output below by calling your functions.
// Remember that your functions should've already included console logs, therefore you are only calling your functions NOT logging them below.
// console.log("groceryList")
// let groceryList=["Gouda Cheese","Brie Cheese","Swiss Cheese"]

/*
// The grocery list is cleared
// Item added: Gouda Cheese
// Item added: Brie Cheese
// Item added: Swiss Cheese
// Item removed: Swiss Cheese
// Item added: Green Grapes
// Grocery List: Gouda Cheese, Brie Cheese, Green Grapes
// Item added: Prosciutto
// Item added: Chorizo
// Item added: Multigrain Crackers
// Item updated from Chorizo to Jamon
// The grocery list has 6 item(s)
// Item added: Pita Chips
Grocery List=["grocery Gouda Cheese", "Brie Cheese", "Green Grapes", "Prosciutto", "Jamon", "Multigrain Crackers", "Pita Chips"
*/

// Call 1: Clear the grocery list
 clearingList()
// Call 2: Add Gouda Cheese
groceryListAdder("Gouda Cheese")
// Call 3: Add Swiss Cheese
groceryListAdder("Swiss Cheese")
// Call 4: Remove Swiss Cheese
groceryListremover("Swiss Cheese")
// Call 5: Add Green Grapes
groceryListAdder("Green Grapes")
// Call 6: Add Prosciutto
groceryListAdder("Prosciutto")
// Call 7: Add Chorizo
groceryListAdder("Chorizo")
// Call 8: Add Multigrain Crackers
groceryListAdder("Multigrain Crackers")
// Call 9: Update Chorizo to Jamonconsolee
console.log(groceryList)

groceryListUpdate("Jamon", 3)
// Call 10: Show the count of items
groceryList.length
// Call 11: Add Pita Chips
groceryListAdder("Pita Chips ")
// Call 12: Show the final list
console.log(groceryList)

//////////////////////////////////////////////////////////////////////
// Extra Credit - Improving functions
// EC1: Function #3 asks you to create a function that updates an item from the array. 
// Refactor it so that instead of taking an index it takes in the name of the item you want to update. 

// EC2: Function #2 asks you to create a function that removes the last item from the grocery list. 
// Refactor it so that it can remove any item from any part of the grocery list. 
