// JavaScript async / await

// We use the async keyworld with a function that the function is an
// asynchronous function. The async function returns a promise.

{
    // async function fun_name(parameter1,perameter2,...parameterN) {
    //               // statements
    // }

    // // fun-Name - name of the function
    // // parameters - parameters that are passed to the function
}






// Async

// The async keyword is used before the function to represent that 
// the function is asynchronous.

{
    // // async functon example

    // async function f() {
    //        console.log('Async Function.');
    //        return Promise.resolved(1);
    // }

    // f().then((data) => console.log(data));
}

// this function returns a promise, you can use the chaining method then()

{
    // async function f() {
    //         console.log('Async Function.');
    //         return Promise.resolve("SkillQode");     
    // }

    // f().then(function(result) {
    //            console.log(result)
    // });
}








// JavaScript await Keyword

// The awit keyworld is used inside the async function to wait for the
// asynchronous operation.

// The syntax to use await is

{
    // let result = awit promise;
}

// The use of await pause the async function until the promise returns
// a result (resolve or reject) value.

{
    // // a promise
    // let promise = new Promise(function (resolve , rejected) {
    //       setTimeout(function () {
    //          resolve('Promise resolved')}, 4000);
    //      });



    // //async function

    // async function asyncFunc() {

    //      // wait until the promise resolves
    //      let result = awit promise;
    
    //      console.log(result);
    //      console.log('hello');
    // }

    //   // calling the async function
    // asyncFunc();
   
}

// A Promise object is created and it gets resolved after 4000 millseconds. Here,
// the asyncFunc() function is written using the async function.

// The await keyword wait for the promise to be complete (resolve or object).

// Hello i displayed only after promise value is available to the result variable.

// In the above program, if await is not used, hello is dispalyed before Promise 
// resolved.

// This can be usefull if there are multiple promise in the program.

{
    // let promise1 = new Promise(function (reslove,reject) {
    //            setTimeout(function () {
    //                 resolve('Promise 1 resolved')
    //            },2000);
    // });

    // let promise2 = new Promise(function (resolve, reject) {
    //            setTimeout(function () {
    //                resolve('Promise 2 resolved')
    //            },3000);
    // });

    // let promise3 = new Promise(function (resolve, reject) {
    //              setTimeout(function () {
    //                   resolve('Promise 3 resolved')
    //              },4000);
    // });



    // asyc function asyncFUnc() {

    //     let result1 = await promise1;
    //     console.log(result1);

    //     let result2 = await promise2;
    //     console.log(result2);

    //     let result3 = await promise3;
    //     console.log(result3);
    //  }
}


// Benefits of Using async Function

// The code is more readable than using a callback or a promise.
// Error handling is simpler.
// Debugging is easier.

// Note : These two keywords async / await were introduced in the newer version
//        of JavaScript (ES8). Some older browesers may not support the use of 
//        async / await.

