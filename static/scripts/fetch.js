/**
 * 
 * Fetch API provides a fetch() method that we can use to send requests to a server. 
 * 
 * The fetch method returns an object called a Promise. We retrieve this Promise from
 * the response that is received from the server. 
 * 
 * A Promise object represnts a value that may not be available yet, but will be resolved
 * in the future. It allows us to write asynchronous code. 
 *
 * Asynchronous
 * 
 * JS is single threaded. We don't have the ability to directly make JS function
 * in a multi-threaded way. 
 * 
 * This means - unless we take steps to work asynchronously, whenever we have some
 * function that takes time to complete, our DOM/html page will be 'frozen' and inaccessible
 * until that function completes. 
 * 
 * With fetch(), we use the keywords 'async' and 'await'
 * 
 * async - we add this keyword to our function declaration to tell it (REWORD) that
 * we are writing a function that returns a Promise. 
 * 
 * the await keyword - is used inside of async functions
 *  - it pauses the execution on that line until the promise is resolved.
 *  
 */

//document.getElementById("getPostsButton").addEventListener('click', getPosts);
// this demo uses the 'onclick' attribute in the html button tag - so the above isn't needed

const baseUrl = "https://jsonplaceholder.typicode.com";

async function getPosts() {

    let postId = document.getElementById('userInput').value;

    // send a GET request to https://jsonplaceholder.typicode.com/posts

    let res = await fetch(`${baseUrl}/posts/${postId}`); // GET is default

    if (res.status === 200) {
        let data = await res.json();
        console.log(data);
        populateData(data);
    }

}


function populateData(data) {

    // get the empty div
    let dataDiv = document.getElementById('data');

    // DOM manipulation to present the data to the page

    let postTitle = document.createElement('h3');
    postTitle.innerHTML = data.title;

    let postBody = document.createElement('p');
    postBody.innerHTML = data.body;

    dataDiv.append(postTitle);
    dataDiv.append(postBody);

}




// imagine that we are on a webpage where a user can register and create a new account
// async function incompletePost() {

//     let newUser = {

//         id: 0,
//         username: "newUser", // document.getElementById("usernameInput").value
//         password: "passpass" //document.getElementById("passwordInput").value
//     }

//     let newUserJson = JSON.stringify(newUser);

//     let res = await fetch(
//         `${baseUrl}/posts/${postId}`,
//          {
//             method: "POST",
//             body: newUserJson,
//             headers: {"Content-Type": "application/json"}
//         });

// }