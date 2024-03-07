// Document Object Model in JavaScript

// What is Document Object Model (DOM)
// The Document Object Model (DOM) is an application programming interface 
// (API) for manipulating HTML document.

// The DOm representes an HTML document as a tree of nodes. The DOM provides 
// function that allow you to add, remove and modify parts of the document 
// effectively.

// Note that the DOM is cross-platform and language-independent ways of mani-
// -pulating HTML and XML document.

// A document as a hierarchy of nodes
// The DOM represents an HTML document as a hierarchy of node. Consider the
// following HTML document:

// <html>
//     <head>
//         <title>JavaScript DOM</title>
//     </head>
//     <body>
//         <p>Hello DOM!</p>
//     </body>
// </html>  





// Selecting elements

// getElementById()       - select an element by id.
// getElementByTagName()  - select element by a tag name.
// getElementClassName()  - select element by one or more class names.
// querySelectot()        - select elements by CSS selectors.






// JavaScript getElementById

{

//     function findElement() 
//     {
//         const element = document.getElementById("id1");
//         element.innerHTML = "element found!.......";
//         element.style.color="blu";
//         document.getElementById("id2").innerHTML = "hello world......!" 
//     }


//     const node1 = document.getElementById("id2");
//     const node2 = document.getElementById("id3");

//     function textNode1()
//     {
//         alert(node1.innerHTML);
//     }
//     function textNode2() 
//     {
//         alert(node2.innerHTML);   
//     }

}







// getElementByTagName()

{
    // const element =document.getElementsByTagName("h1");
    // console.log(element);

    // function changeColor() 
    // {
    //     for(let i=0 ; i<element.length ; i++) 
    //     {
    //         if(i==3)
    //         {
    //             element[i].style.color = "red";
    //             element[i].style.border = "1px so;id green";
    //         }else
    //             element[i].style.color = "blue";
    //     }
    // }
}







// getElementBtClassName()

{

    // const element = document.getElementsByClassName("blue");
    // console.log(element);

    // function changeColor()
    // {
    //     for(let i=0 ; i<element.length ; i++)
    //     {
    //         if(i==2) continue;
    //         element[i].computedStyleMap.color = "blue";
    //     }
    // }
}







// querySelector()

{
    // const element = document.querySelector(".demo");
    // console.log(element);

    // function changeColors()
    // {
    //     element.style.color = "red";
    // }
}

// class -> .className                id -> #id








// querySelectorAll

{
    // const element = document.querySelectorAll("#sun p");
    // console.log(element);

    // function changeColors()
    // {
    //     for(let i=0 ; i<element.length ; i++)
    //     {
    //         element[i].style.color = "red";
    //     }
    // }
}








// JavaScript get attribute

{
    // const element = document.querySelector("p");
    // function check()
    // {
    //     if(element.hasAttribute("name"))
    //     {
    //         alert("Yes 'name' attribute exist!");
    //     }else{
    //         alert("No 'name' attribute doesn't exist!");
    //     }
    // }
}








// JavaScript get attribute

{
    // function attr(elem)
    // {
    //     alert(elem.getAttribute("id"));
    // }
}








// JavaScript set attribute

{
    // const element = document.querySelector("p");

    // function checkAttr()
    // {
    //     alert(element.hasAttribute("name"));
    // }

    // function addAttr()
    // {
    //     element.setAttribute("name","myParagraph");
    // }
}








//  JavaScript remove attribute

{
    // const element = document.querySelector("button");

    // function remove()
    // {
    //     element.removeAttribute("title");
    // }
}








//  HTML Object Accessible

/*

    document.body
    document.documentElement
    document.forms
    document.images
    document.links
    document.scripts
    document.title

*/

{
    // document.getElementById("demo").innerHTML = document.body.innerHTML;
    // document.getElementById("demo").innerHTML = "SkillQode";
}


{
    // document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
}


{
    // document.getElementById("demo1").innerHTML = "Number of forms tag : " + document.forms.length;
}


{
    // document.getElementById("demo2").innerHTML = "Number of images tag : " + document.images.length;
}


{
    // document.getElementById("demo3").innerHTML = "Number of link tag : " + document.links.length;
}


{
    // document.getElementById("demo4").innerHTML = "Number of scripts : " + document.scripts.length;
}


{
    // document.getElementById("title").innerHTML = "The title of this document is : " + document.title;

}