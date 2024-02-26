// //                         Array Method

// // =>                      Array length

const arr = [1,2,3,4, 'skill' , true , false];
console.log(arr.length);                               // => 7





// // =>                       Push Method

// const data= [11,22,33,44,55];
// data.push(66);
// data.push(77,88,99);
// console.log(data);                                     // => (9) [11, 22, 33, 44, 55, 66, 77, 88, 99]





// // =>                        Pop Method

// const data= [11,22,33,44,55];
// data.pop()
// console.log(data);                                     // => (4) [11, 22, 33, 44]

// data.pop()
// console.log(data);                                     // => (3) [11, 22, 33]





// // =>                        unshift Method

// const data= [11,22,33,44,55];
// data.unshift(110)
// data.unshift(220,330)
// console.log(data);                                      // => (8) [220, 330, 110, 11, 22, 33, 44, 55]





// // =>                         shift Method

// const data= [11,22,33,44,55];
// data.shift();
// console.log(data);                                      // => (4) [22, 33, 44, 55]





// // =>                         concat Method

// const data= [11,22,33,44,55];
// let arr = ['skill' , 'Qode'];
// console.log(data.concat([99,88,77,66] , ['Hello' , 'World'] , arr));
//           // => (13) [11, 22, 33, 44, 55, 99, 88, 77, 66, 'Hello', 'World', 'skill', 'Qode']





// // =>                         reverse Method

// const data= [11,22,33,44,55];
// console.log(data.reverse());                            // => (5) [55, 44, 33, 22, 11]





// // =>                         sort Method

// let txt = [88,266,11,133,44,22,155,99];
// console.log(txt.sort());                                // => (8) [11, 133, 155, 22, 266, 44, 88, 99]

// console.log(txt.sort((a,b)=> a-b));                     // => (8) [11, 22, 44, 88, 99, 133, 155, 266]

// let data = ['world' , 'Qode' , 'Skill' , "Hello"];
// console.log(data.sort());                               // => (4) ['Hello', 'Qode', 'Skill', 'world']





// // =>                         Array Max

// let data = [88,266,11,133,44,22,155,99];
// console.log(Math.max.apply(null,data));                 // => 266





// // =>                        Array Min

// let txt = [88,266,11,133,44,22,155,99];
// console.log(Math.min.apply(null,txt));                  // => 11





// // =>                       Slice Method

// let txt = [88,266,11,133,44,22,155,99];
// txt.slice(2,5);
// console.log(txt);                                       // => (8) [88, 266, 11, 133, 44, 22, 155, 99]

// txt.splice(2,3);
// console.log(txt);                                       // => (5) [88, 266, 22, 155, 99]

// let a = txt.splice(2,0, 'Skill' , 100,200,400);
// console.log(a);                                         // => []

// console.log(txt);                                       // => (9) [88, 266, 'Skill', 100, 200, 400, 22, 155, 99]

