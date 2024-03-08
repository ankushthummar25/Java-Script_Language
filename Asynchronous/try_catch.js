// JavaScript try....catch....finally Statement

// The try, catch and finally block are used to handle exceptions ( a type of an error ).

// Types of Errors

// Syntax Error  : Eror in the syntax. For example, if you write console.log('yor result;);,
//                 the above program throws a syntax error. The spelling of console is a 
//                 mistake in the above code.

// Runtime Error : This type of error occurs during the execution of the program. For example,
//                 calling an invaild function or a variable.

// JavaScript try...catch Statement

{
    // // The try...catch statement is used to handle the exceptions.
    // try {
        // body od try
    // }
    // catch(error) {
            // body of catch
    // }


    //  // The main code is inside the try block. Whie executing the try lock, 
    //  // if any errer occurs, it goes to the catch block. The catch block  
    //  // handle the error as per the catch statements. 
}

// Display Undeclared Variable

{
    // // program to show try...catch in a program

    // const numerator = 100 , denominator = 20;

    // try {
    //     console.log(numerator/denominator);

    //     // forgot to define variable a
    //     let a;
    //     console.log(a);
    //     console.log('Helloo');
    // }
    // catch(error) {
    //     console.log('An error caught');
    //     console.log('Error message : ' + error);
    // }
}









// JavaScript try...catch...finally Statemnt

// You can also use the try...catch...finally statment to handle exceptions.
// The Finally Block executes both when the code runs sucessfully or if an 
// error occurs.

{
    // try{
    //     // try_statements
    // }
    // catch(error) {
    //     // catch_statements
    // }
    // finally() {
    //     // codes that gets executed anyway
    // }
}

// try...catch...finally Example

{
    // const numerator = 100, denominator = 20;

    // try{
    //     console.log(numerator/denominator);
    //     console.log(a);
    // }
    // catch(error){
    //     console.log('An error caught');
    //     console.log('Error message : ' + error);
    // }
    // finally{
    //     console.log('Finally will execute every time');
    // }

    // // You need to use catch or finally statement after ry statement. otherwise,
    // // the program will throw an error Uncaught SyntaxErrr: Missing catch or finally
    // // after try.
}









// JavaScript throw Statement

// The syntax of throw statement is

{
    // throw expression;
}


{
    // coust number = 5;
    // throw number/0;  // generate an exception when divided by 0
}


// Javascript throw with try...catch

{
    // try{
    //     // body of try
    //     throw exception;
    // }
    // catch(error){
    //     // body of catch
    // }
}

// try...catch....throw Example

{
    // const number = 100;

    // try{
    //     if(number > 50) {
    //         console.log('Success');
    //     }
    //     else{

    //         // user-defined throw statement
    //         throw new Error('The number is low');
    //     }

    //     // if throw executes, the below code does not execute
    //     console.log('hello');
    // }
    // catch(error) {
    //     console.log('An error caught');
    //     console.log('Error mesage : ' + error);
    // }
}