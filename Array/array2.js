// // =>                          Array Changing Elements

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "Kiwi"; 
// console.log(fruits);                                 // (4) ['Kiwi', 'Orange', 'Apple', 'Mango']





// // =>                           Every Method

// let data = [88,266,11,133,44,22,155,99];
// let result = data.every((val, index) => {
//     return val > 20
// })
// console.log(result);                                // => false





// // =>                           Some Method

// let data = [88,266,11,133,44,22,155,99];
// let result = data.some((val, index) => {
//     return val > 50
// })
// console.log(result);                                // => true





// // =>                          Filter Method

// let data = [88,266,11,133,44,22,155,99];
// let result = data.filter((val, index) => {
//     return val > 50
// })
// console.log(result);                                 // => (5) [88, 266, 133, 155, 99]





// // =>                            Find Method

// let data = [88,266,11,133,44,22,155,99];
// let result = data.find((val, index) => {
//     return val > 90
// })
// console.log(result);                                 // => 266





// // =>                            FindIndex Method

// let data = [88,266,11,133,44,22,155,99];
// let result = data.findIndex((val, index) => {
//     return (val > 10 && val <= 20);
// })
// console.log(result);                                 // => 2 (11 index)





// //  =>                             Map Method

// let data = [88,266,11,133,44,22,155,99];
// let result = data.map((val, index) => {
//     return val +1;
// })
// console.log(result);                                 // => (8) [89, 267, 12, 134, 45, 23, 156, 100]





// // =>                             forEach Method

// let data = [88,266,11,133,44,22,155,99];
// let txt ="";
// let result = data.forEach((val, index) => {
//     txt = txt + val + " ";
// })
// console.log(txt);                                    // => 88 266 11 133 44 22 155 99 





// // =>                            Reduce Method

// let data = [88,266,11,133,44,22,155,99];
// let result = data.reduce((total , val) => {
//     return total + val;
// })
// console.log(result);                                  // => 818 ( array total )





// // =>                            reduceRight Method

// let data = [88,266,11,133,44,22,155,99];
// let result = data.reduceRight((total ,val) => {
//     return total + val;
// },0)
// console.log(result);                                 // => 818 (array total )





// // =>                               Entries Method

// let data = [88,266,11,133,44,22,155,99];
// let aa = data.entries();

// console.log(aa.next().value);                         // => (2) [0, 88]
// console.log(aa.next().value);                         // => (2) [1, 266]
 




// // =>                               includes Method 

// let data = [88,266,11,133,44,22,155,99];

// console.log(data.includes(88));                        // => true
// console.log(data.includes(80));                        // => false




// // =>                              copyWithin Method

// let data = [88,266,11,133,44,22,155,99];
// let result = data.copyWithin(3,0,2);
// console.log(result);                                     // => (8) [88, 266, 11, 88, 266, 22, 155, 99]

// let as = data.copyWithin(3,0);
// console.log(as);                                         // => (8) [88, 266, 11, 88, 266, 11, 88, 266]

