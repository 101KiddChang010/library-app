//  DOM selectors
const topContainer = document.getElementById("container-top");

// variables
let myLibrary = [];

// Functions
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (title + " by " + author + ", " + pages + " pages, " + read);
    }
}

function addBookToLibrary(userBook) {
    myLibrary.push(userBook);
}

function displayLibrary(library) {

    for (const books of library) {
        // console.log(books.title);
    }
}

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

    titleParagraph.textContent = "Title: " + title;
    authorParagraph.textContent = "Author: " + author;
    pagesParagraph.textContent = "Number of Pages: " + pages;
    readParagraph.textContent = "Mark as Read";

    newCard.appendChild(titleParagraph);
    newCard.appendChild(authorParagraph);
    newCard.appendChild(pagesParagraph);
    newCard.appendChild(readParagraph);
    newCard.appendChild(input);
}

function divShow() {
    document.getElementById("container-addbook").style.display = "flex";
}

function divHide() {
    document.getElementById("container-addbook").style.display = "none";
}

// adds book
document.getElementById("addbook-btn").addEventListener("click", function() {

});

let bookOne = new Book("habits", "j.k rowlin", "52", "unread");
let bookTwo = new Book("money", "rob keyes", "152", "unread");
//console.log(bookOne.info());

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
displayLibrary(myLibrary);
