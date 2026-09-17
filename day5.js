let inventory = ["sword", "shield", "potion", "armor"];
console.log(" before push: " + inventory);                     // 4 - the number of items in the array after removing shield
inventory.push("helmet");                   // adds a new item to the end of the array  
console.log(" after push: " + inventory);                     // 5 - the number of items in the array after adding helmet
inventory.splice(1, 1);                     // removes the second item from the array (shield)
console.log(" after splice: " + inventory);                     // 3 - the number of items in the array after removing shield
inventory.pop();                            // removes the last item from the array (helmet)
console.log(" after pop: " + inventory);                     // 2 - the number of items in the array after removing helmet
inventory.forEach(function(item) {
    console.log(" item: " + item);
});