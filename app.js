//  DOM selectors
const topContainer = document.getElementById("container-top");

// Grabs user input and creates card function
document.getElementById("submit-btn").addEventListener("click", function() {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");

    createCard(title.value, author.value, pages.value, read.checked);

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
});

// Deletes all user text-field inputs if close button is clicked
document.getElementById("close-container-btn").addEventListener("click", function() {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
});

// Deletes all books
document.getElementById("delete-all-btn").addEventListener("click", function() {
    let c = topContainer.lastElementChild;
    while (c) {
        topContainer.removeChild(c);
        c = topContainer.lastElementChild
    }
});

// Creates book card and pushes card to html for user to view
function createCard(title, author, pages, read) {
    const newCard = document.createElement("div");
    const titleParagraph = document.createElement("p");
    const authorParagraph = document.createElement("p");
    const pagesParagraph = document.createElement("p");
    const readParagraph = document.createElement("p");
    const input = document.createElement("input");
    newCard.className = "card";
    input.className = "checkbox";
    input.setAttribute("type", "checkbox");
    
    if (read == true) {
        input.checked = true;
    } else {
        input.checked = false;
    }

    if (pages === '') {
        pages = 0
    } 

    titleParagraph.textContent = "Title: " + title;
    authorParagraph.textContent = "Author: " + author;
    pagesParagraph.textContent = "Number of Pages: " + pages;
    readParagraph.textContent = "Mark as Read";

    newCard.appendChild(titleParagraph);
    newCard.appendChild(authorParagraph);
    newCard.appendChild(pagesParagraph);
    newCard.appendChild(readParagraph);
    newCard.appendChild(input);

    topContainer.appendChild(newCard);
}

// --Hides or shows div
function divShow() {
    document.getElementById("container-addbook").style.display = "flex";
}

function divHide() {
    document.getElementById("container-addbook").style.display = "none";
}
