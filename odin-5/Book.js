/**
 * Book Constructor
 * @param {String} title 
 * @param {String} author 
 * @param {Number} pages 
 * @param {Boolean} read 
 */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


Book.prototype.changeStatus = function() {
    this.read = !this.read;
}

Book.prototype.readInfo = function() {
    return this.read ? "has been read" : "has not been read"
}