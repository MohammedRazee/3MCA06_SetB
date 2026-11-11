// ==================================================================
// EDIT THIS FILE ONLY. Do not change any other file in this project.
// Complete every function below. Each function must return its result.
// ==================================================================


// Step 1: Import mongoose here.



// Step 2: Write your MongoDB connection URI here.
//         Database name: library



// Step 3: Create the schema and the model here.
//         Model name: Book   (Mongoose saves it in the "books" collection)
//         Fields: title (String), author (String), genre (String), price (Number)



// Step 4: Connect to MongoDB inside this function.
//         After connecting, print: Connected to MongoDB
export async function connectDB() {

}


// Return all the books in the collection.
export async function getAllBooks() {

}


// genre comes from the "Search by genre" box on the page, for example "Fiction".
// Return the books whose genre matches it.
export async function findBooksByGenre(genre) {

}


// maxPrice is a number typed on the page, for example 300.
// Return the books whose price is less than or equal to maxPrice.
export async function findBooksByMaxPrice(maxPrice) {

}


// Return the 3 cheapest books, cheapest first.
export async function getThreeCheapestBooks() {

}


// book comes from the "Add Book" form, for example:
//   { title: "Blue Skies", author: "Riya", genre: "Fiction", price: 320 }
// Save it in the database and return the saved book.
export async function addBook(book) {

}
