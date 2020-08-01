let myLibrary = [];
const cardGrid = document.querySelector(".card-grid");
const plusCard = document.querySelector(".plus-card")
const modal = document.querySelector("#myModal");
const closeModal = document.querySelector(".close");
const addNewBookForm = document.querySelector("#add-new-book");
const changeStatus = document.querySelector(".read-status");


function render() {
    deleteAllCards()
    myLibrary.forEach((book, index) => {
        createCard(book, index)
    })
}

function deleteAllCards() {
    document.querySelectorAll(".card").forEach(element => {
        element.parentNode.removeChild(element);
    })
}


function createCard(book, index) {
    const card = document.createElement("div");
    const cardContent = document.createElement("div");
    const icon = document.createElement("img");
    const cardTitle = document.createElement("div");
    const cardAuthor = document.createElement("div");
    const cardPages = document.createElement("div");
    const cardRead = document.createElement("div");
    const changeReadStatus = document.createElement("div");
    const deleteBook = document.createElement("div");

    card.classList.add("card");
    cardContent.classList.add("card-content");
    icon.classList.add("book-icon");
    icon.src = "images/Gray_book.png";


    cardTitle.classList.add("card-content-text");
    cardAuthor.classList.add("card-content-text");
    cardPages.classList.add("card-content-text");
    cardRead.classList.add("card-content-text");
    changeReadStatus.classList.add("read-status");
    deleteBook.classList.add("close")

    card.setAttribute('data-library-index', index)

    cardTitle.textContent = `${book.title}`;
    cardAuthor.textContent = `${book.author}`;
    cardPages.textContent = `${book.pages}`;
    cardRead.textContent = `${book.readInfo()}`;

    changeReadStatus.textContent = "change read status";
    changeReadStatus.addEventListener("click", (e) => {
        const libraryIndex = e.path[1].getAttribute("data-library-index");
        myLibrary[libraryIndex].changeStatus()
        render()
    })

    deleteBook.textContent = "\u00D7"
    deleteBook.addEventListener("click", (e) => {
        const libraryIndex = e.path[1].getAttribute("data-library-index");
        myLibrary.splice(libraryIndex, 1);
        render()
    })

    cardContent.appendChild(icon)
    cardContent.appendChild(cardTitle)
    cardContent.appendChild(cardAuthor)
    cardContent.appendChild(cardPages)
    cardContent.appendChild(cardRead)

    card.appendChild(deleteBook)
    card.appendChild(cardContent)
    card.appendChild(changeReadStatus)
    cardGrid.insertBefore(card, plusCard);
}

plusCard.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", () => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

addNewBookForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let formData = document.querySelectorAll("form input")
    let title = formData[0].value;
    let author = formData[1].value;
    let pages = formData[2].value;
    let read = formData[3].checked;
    myLibrary.push(new Book(title, author, pages, read))
    modal.style.display = "none";
    render();
});

render();