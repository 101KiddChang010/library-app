let myLibrary = [];

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

let bookOne = new Book("habits", "j.k rowlin", "52", "unread");
let bookTwo = new Book("money", "rob keyes", "152", "unread");
//console.log(bookOne.info());

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
displayLibrary(myLibrary);
