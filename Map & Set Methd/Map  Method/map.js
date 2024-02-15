// Create a Map

// const fruits = new Map([
// 				["apples", 500],
// 				["bananas", 300],
// 				["oranges", 200]
// ]);
console.log(fruits);					//{'apples' => 500, 'bananas' => 300, 'oranges' => 200}




// // Set Map Values

const fruits = new Map();
console.log(fruits.set("apples", 500));
console.log(fruits.set("bananas", 300));


// // Get Map Values
// fruits.get("apples"); // Returns 500

// // The size property returns the number of elements in a Map.
// let size = fruits.size; // 3

// // Delete Map Value
// const deleteApple = fruites.delete("apple");
// const deleteOreange = fruites.delete("oranges");

// // has() method
// fruits.has("apples"); // true
// fruits.has("Kiwi"); // false

// // forEach() method
// let txt = "";

// fruits.forEach((value, key)=>{
// 			txt += key + " => " + value +"\n";
// });
// apples => 500
// bananas => 300
// oranges => 200