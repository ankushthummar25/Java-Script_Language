// // JAvaScript setTimeout()

// // The setTimeout() method executes a block of code afer the specified time.
// // The Method executes the code only once. 

{
    // setTimeout(function , milliseconds);
    // setTimeout(hello() , 5000);
    // function - a function containing a bock of code
    // milliseconds - the time after which the function is executed
}

// The setTimeout() method returns an intervalID, which is a positive integer.







// Dislay a Text Once After 3 Second

{
    // // program to display a tet using setTimeout method
    // function greet(){
    //         console.log('Hello World');
    // }
    // // greet();
    // let id = setTimeout(greet ,2000);
    // console.log(id);
    // console.log('This message is shown first');
    // console.log('1 Today to much Rain...');

    // // the setTimeout() method calls the greet() function after 2000 milliseconds (2 second).

    // let x = setInterval(greet , 2000);
    // clearInterval(x);
}

// The setTimeout() method returns the interval id.

{
    // // program to display a text using setTimeout method
    
    // function greet() {
    //     console.log('Hello World');
    // }

    // let intervalid = setTimeout(greet , 3000);

    // console.log('Id: ' + intervaIId);
    // clesrTimeout(intervaIId);
    // console.log("Stop setTimeout Function");
}








// Display Time Every 3 Second

{
    // // program to display time every 3 second
    // function showTime() {
    
    //         // return new date and time
    //         let dataTime = new Date();

    //         // returns the current local time
    //         let time = dataTime.toLocaleDateString();

    //         console.log(time);

    //         // display the time after 3 seconds
    //         setTimeout(showTime , 3000);
    // }

    //    //  calling the function
    //  showTime();
}

// The above program displays the time every 3 seconds.

// The setTimeout() method calls the function only once after the time interval (here 3 seconds).








// JavaScript clearTimeout()

// As you have seen in the above example, the program executes a block 
// of code after the specified time interval. If you want to stop this 
// function call, you can use the clearTimeout() method.

//The syntax of clearTimeout() method is
{
    // clearTimeout(intervalID);
}

// Use cleatTimeout() method

{
    //  // proram to stop the setTimeout() method

    // let count = 0;

    //  // function creation
    // function increaseCount() {

    //       // increasing the count by 1
    //       count += 1;
    //       console.log(count);
    // }

    // let id = setTimeout(increaseCount , 3000);

    // clearTimeout
    // clearTimeout(id);
    // console.log('setTimeout is stopped.');
}








// The setTimeout() method is used to increase the value of count after 3 seconds.
// However , the clearTimeout() method stops the function call of the setTimeout()
// method. Hence, the count vue is not increased.


// you generally use the clearTimeout() method when you need to cancel the setTimeout() 
// method call befre it happens.


// You can also pass additional arguments to the setTimeout() method.

{
    // setTimeout(function , milliseconds , prameter1, ...paramenterN);
}

// When you pass additional parameters toDoe are passed to the setTimeout() method. 
// These two parameters are the argument that will be passed to the function (here,
// greet() function) that is defind inside the setTimeout() method.// JavaScript CallBack Function

// Program with setTimeout()

{
    //   // program that shows the elay in execution

    //  function greet() {
    //      console.log('Hello World');
    // }

    // function sayName(name) {
    //      console.log('Hill' + ' ' + name);
    // }

    //   // calling the function 
    // setTimeout(greet , 2000);
    // sayName('John');
}








// JavaScript Promise and Promise Chaining

// In JavaScript, a promise is a good way to handle asynchronous operations. It is used
// to find out if the asynchronous operation is succesfully completed or not.

// A promise may have one of three states.

// pending
// Fulfilled
// Rejected

// A promise starts in a pending state. That means the process is not complete. If the 
// operation is successfu, the process eds in a fulfilled state. And, if an error occurs,
// the process ends in s rejected state.

// Create a Promise

// To create a promise object, we use the Promise() constructor.

{
    // let promise = new Promise(function(resolve , reject){
    //    //  do something
    // });

    //  // The Promise() constructor takes as an argument. The Function also accepts two
    //     Functions resolve() and reject().

    //  // If the promise returns successfully, the resolve() function is called. And, if an 
    //     erroe occurs, the reject() function is called.
}








// Program with a Promise

{
    // const cout = false;

    // let countValue = new Promise(function (resolve , reject){
    //         if (cout) {
    //                 resolve("There is a count value.");
    //                    } else {
    //                               reject("There is no count Value.");
    //                           }
    // });

    // console.log(countValue);

    // countValue
    //        .then((result)=>console.log(result))
    //        .catch((err)=>console.log(err));
}









// JavaScript Promise Chaining

// Promise are useful when you have to handle more than one asynchronous task,
// one after another. For that, we use promise chaining.

// You can perform an operation after a promise is resolved using mathods then(),
// catch(), catch() and finally().

// JavaScript then() method.

// The then() method is used with the callback when the promise is successfully 
// fulfilled oe resolved.

// The syntax of then() method is


{
    // promiseObject.then(onFUlfilled, onRejected);
}

// Chaining the Promise with then()

{
    // // returns a promise

    // let countValue = new Promise(function (resolve, reject){
    //            resolve("Promise resolved");
    // });

    //  // executes when promise is resolved successfully

    // countValue
    //       .then((result) => {
    //              console.log(result);
    //        })  
    //       .then(() => {
    //              console.log("You can call multiple function this way.");
    //        })
    //       .then(() => {
    //              console.log("SkillQode");
    //        })
    //       .catch((err) => {
    //              console.log(err);
    //        });  
}








// JavaScript catch() method

// The catch() method is used with the callback when the promise is rejected
// or if an error occurs.

{
    // // returns a promise
    // let countValue = new Promise(function (resolve, reject) {
    //            reject('Promise rejected');    
    // });

    // // executes when promise is resolved successfully
    // countValue.then(
    //        function successValue(result) {
    //            console.log(result);
    //        },
    //  );
}








// JavaScript finally() method

{
    // // You can also use the finally() method with promise.The finally()
    // // method gets executed when the promise is either resolved successfully 
    // // or rejected.
    
    // // returns a promise
    // let countValue = new Promise(function (resolve , reject) {
    //     // could be reslved or rejected
    //     resolve('Promise resolved');
    //     // reject ('Promise rejected');
    // });

    // // // // add other blocks of code
    // countValue
    //     .then(result=>console.log(result))
    //     .catch((err)=>console.log(err))
    //     .finally(
    //         function greet() {
    //             console.log("This code is executed.");
    //         }
    //     );
}