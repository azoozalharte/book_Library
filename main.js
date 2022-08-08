const card = document.querySelector("#card_container");
const titleInput = document.querySelector("#input-title");
const authorInput = document.querySelector("#input-author");
const pagesInput = document.querySelector("#input-pages");
const addButton = document.querySelector("#adding");

let myLibrary = [];
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function addBookToLibrary(obj) {
  myLibrary.push(obj);
  displayAllBooks(myLibrary);
  let buttons = document.querySelectorAll(".button");
  console.log(buttons);
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // console.log(e.target.parentElement.getAttribute("data-index-number"));
      const targetID = document.getElementById(
        e.target.parentElement.getAttribute("id")
      );
      myLibrary.splice(
        e.target.parentElement.getAttribute("data-index-number"),
        1
      );
      card.removeChild(targetID);
      console.log(myLibrary);
    });
  });
}

function displayAllBooks(arr) {
  for (let i = arr.length - 1; i < arr.length; i++) {
    const element = arr[i];
    // card div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.setAttribute("data-index-number", i);
    cardDiv.setAttribute("id", `id_${i}`);
    card.appendChild(cardDiv);
    // card title
    const cardTitle = document.createElement("p");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = element.title;
    cardDiv.appendChild(cardTitle);

    // card wraper
    const cardWraper = document.createElement("div");
    cardWraper.classList.add("card-wraper");
    cardDiv.appendChild(cardWraper);

    // autor
    const author = document.createElement("p");
    author.classList.add("card-body");
    author.innerHTML = element.author;
    cardWraper.appendChild(author);

    // pages
    const pages = document.createElement("p");
    pages.classList.add("card-body");
    pages.innerHTML = element.pages;
    cardWraper.appendChild(pages);

    // button
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerHTML = "حذف";

    cardDiv.appendChild(button);
  }
}

addButton.addEventListener("click", function () {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  console.log(typeof pages);
  if (title == "" || author == "") {
    // alert("لو سمحت عبي الخانات ولا تتعبني");
  } else {
    let newBook = new Book(title, author, pages, false);
    addBookToLibrary(newBook);
  }
});
