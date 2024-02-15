// Create a Map

const fruits = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200]
]);
// console.log(fruits);					//{'apples' => 500, 'bananas' => 300, 'oranges' => 200}





// // Set Map Values

// const fruits = new Map();
// console.log(fruits.set("apples", 500));       // { 'apples' => 500 }
// console.log(fruits.set("bananas", 300));      // { 'apples' => 500, 'bananas' => 300 }
// console.log(fruits.set("orange",200));        // { 'apples' => 500, 'bananas' => 300, 'orange' => 200 }







// // Get Map Values

// console.log(fruits.get("apples"));                    // Returns 500









// // The size property returns the number of elements in a Map.

// let size = console.log(fruits.size);                     // 3









// // Delete Map Value

const deleteapple = console.log(fruits.delete("apple"));
const deleteoreange = console.log(fruits.delete("oranges"));
console.log(fruits);







// // has() method

// console.log(fruits.has("apples"));                    // true
// console.log(fruits.has("Kiwi"));                      // false







// // forEach() method

// let txt = "";

// console.log(fruits.forEach((value, key))=>{
// txt += key + " => " + value +"\n";
// });
// console.log(txt);
// apples => 500
// bananas => 300
// oranges => 200