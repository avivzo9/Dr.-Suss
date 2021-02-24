import { utilService } from './util.service.js';

const EMAILS_KEY = 'EMAILS';

export const emailsService = {
   
};

var gBooks = [
   
];

function query() {
    return getBooks();
}

function getBooks() {
    return storageService.query(BOOKS_KEY).then((books) => {
        if (!books || !books.length) {
            gBooks.forEach((book) => (book.reviews = []));
            return storageService.postMany(BOOKS_KEY, gBooks);
        }
        return books;
    });
}

function remove(bookId) {
    console.log(' Remove bookId:', bookId);
    return storageService.remove(BOOKS_KEY, bookId);
}
function getById(id) {
    return storageService.get(BOOKS_KEY, id);
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOKS_KEY, book);
    } else {
        return storageService.post(BOOKS_KEY, book);
    }
}

function addReview(bookId, review) {
    return getById(bookId).then((book) => {
        console.log('book433:', book);
        book.reviews.push(review);
        return storageService.put(BOOKS_KEY, book);
    });
}

function ask(x) {
    return axios
        .get(x)
        .then((res) => {
            // console.log('Service Got Res:', res);
            return res.data;
        })
        .catch((err) => {
            console.log('Service got Error:', err);
        });
}

function addGoogleBook(googleBook) {
    const newBook = {
        id: googleBook.id,
        title: googleBook.volumeInfo.title,
        subtitle: googleBook.searchInfo.textSnippet,
        authors: googleBook.volumeInfo.authors[0],
        publishedDate: googleBook.volumeInfo.publishedDate,
        description: googleBook.volumeInfo.description,
        pageCount: googleBook.volumeInfo.pageCount,
        categories: googleBook.volumeInfo.categories[0],
        thumbnail: googleBook.volumeInfo.imageLinks.thumbnail,
        language: googleBook.volumeInfo.language,
        listPrice: {
            amount: 20,
            currencyCode: googleBook.saleInfo.country,
            isOnSale: utilService.randomBool(),
        },
    };
    // gBooks.push(newBook)
    return storageService.post(BOOKS_KEY, newBook);
}

function getNextBookId(bookId) {
    const books = gBooks;
    var bookIdx = books.findIndex((book) => {
        return book.id === bookId;
    });
    const nextBookIdx = bookIdx + 1;
    return books[nextBookIdx].id;
}
