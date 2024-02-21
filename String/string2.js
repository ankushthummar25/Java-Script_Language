//  //                               Slice Method ( start , end )

let data = 'Hello My name is Ankush Thummar.'

let str = data.slice(6,19);                        // My name is An
console.log(str);

// let str = data.slice(6);                           // My name is Ankush Thummar.
// console.log(str);

// let str = data.slice(-19,-1);                      // is Ankush Thummar
// console.log(str);






//  //                              subString( start , end )

// let data = 'Hello My name is Ankush Thummar.'


// let str = data.substring(6,19);                         // My name is An
// console.log(str);

// let str = data.substring(6);                            // My name is Ankush Thummar.
// console.log(str);

// let str = data.substring(-10);                           // Hello My name is Ankush Thummar.
// console.log(str);






//  //                                subStr( start , length )

// let data = 'Hello My name is Ankush Thummar.'

// let str = data.substr(6,7);                                  // My name
// console.log(str);

// let str = data.substr(6);                                     // My name is Ankush Thummar.
// console.log(str)

// let str = data.substr(-17,7);                                  // s Ankus
// console.log(str)






//  //                                    concat

// let text1 = "Hello";
// let text2 = "World";

// let text3 = console.log(text1.concat(" ", text2));            // Hello World

// console.log(text1.concat(" " , '\tFriend'));                  // Hello 	Friend






//  //                                    chartAt

// let text = "HELLO WORLD";                                      
// console.log(text.charAt(0));                                   // H






//  //                                    charCodetAt

// let text = "ANKUSH";                                      
// console.log(text.charCodeAt(0));                                 // 65






//  //                                    replece

// let text = "Please visit Microsoft!";
// console.log(text.replace("Microsoft", "SkillQode"));                // Please visit SkillQode!

// text = text.replace(/Microsoft/g, 'skillQode');
// console.log(text);                                                  // Please visit skillQode!






//  //                                    replaceAll

// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// console.log(text.replaceAll("Cats", "Dogs"));                          // I love cats. Dogs are very easy to love. Dogs are very popular.
// console.log(text.replaceAll("cats", "dogs"));                          // I love dogs. Cats are very easy to love. Cats are very popular.

