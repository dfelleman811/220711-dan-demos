/**
 * DOM - Document Object Model
 * 
 * the DOM is a tree-like structure that represents the HTML Elements of a webpage
 * 
 * each html tag or element in our HTML document is a node in the DOM
 * 
 * this document is created by the browser. 
 * 
 * We use JavaScript to manipulate the DOM
 * 
 * DOM Manipulation 
 * Using JS: 
 * - we can locate elements on a webpage
 * - we can change styling of elements
 * - we can change the text of any elements
 * - we can create and remove elements to/from the webpage. 
 * 
 * 
 * Eventually.... we'll use JS to send HTTP requests to a back
 * 
 * JavaScript = Presentation Layer
 * 
 * Presentation -> Controller Layer -> Service Layer -> Repository Layer -> that talks to db
 */

// Before we can make any changes to our Dom, 
//  we need to locate and select the element in question
// different ways of locating elements on a web page (in an HTML document or in the DOM)
// Query Selector - first element
let h3 = document.querySelector('h3');
console.log(h3);
console.log(h3.innerHTML);

// By ID
document.getElementById('myDiv');
// By Class Name
document.getElementsByClassName('parClass');
// by tag name
document.getElementsByTagName('p');

// can also do this
document.querySelector("p.parClass");

// we can manipulate the elements in many ways
let myDiv = document.getElementById("myDiv");
myDiv.setAttribute("class", "divClass");

// create an element
let newPar = document.createElement('p');
newPar.innerHTML = "I was created using DOM Manipulation!";

// add it as a child to an existing node
myDiv.appendChild(newPar);




// I want to make it so that when a user
// clicks on the button, they can see
// a list of courses

// To do this - we need an Event Listener
// first - locate the element
let button = document.getElementById('myButton');

// now we can add an event listener
button.addEventListener('click', getCourses);


function getCourses() {
   

    // I'm create a fake list of courses
    // we can imagine that this list is 
    // located in the Response Body of HTTP Response
    let courses = [
        {
            id: 1,
            title: "Course 1",
            cost: 54
        },
        {
            id: 2,
            title: "Course 2",
            cost: 550
        },
        {
            id: 3,
            title: "Course 3",
            cost: 999
        }
    ];

    // select div
    let dataDiv = document.getElementById('myDiv');
    
     // clear out the existing data in the div
     dataDiv.innerHTML = '';
     
    // create a new element for each course

    for (let course of courses) {
        let courseTitle = document.createElement('h3');
        courseTitle.innerHTML = course.title;

        let courseCost = document.createElement('h6');
        courseCost.innerHTML = course.cost;
        
        
        dataDiv.append(courseTitle);
        dataDiv.append(courseCost);

    }

    
   

    

    // append those element as a child of the div
    // dataDiv.append(courseTitle);
    // dataDiv.append(courseCost);
}