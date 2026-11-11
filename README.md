# CA Lab Exam - Section 3MCA06 - Set B

**Library Book Catalogue**

## Your task

The web page and the Express server are ready. The database part is missing. Complete it using Mongoose.

- Edit only **database.js**. The comments in it tell you what to write.
- Do not change any other file.

## Steps

1. Open this project folder in VS Code and open a terminal in it.
2. Install the packages:

   ```
   npm install
   npm install mongoose
   ```

3. Make sure MongoDB is running, then add the sample data (see below).
4. Complete **database.js**.
5. Start the server:

   ```
   node index.js
   ```

6. Open **http://localhost:3000** in your browser.

After every change to database.js, stop the server with Ctrl + C and start it again.

## Database details

- **Database:** library
- **Collection:** books
- **Fields:** title (text), author (text), genre (text), price (number)

## Sample data

Open mongosh, paste these commands and press Enter. Paste them only once.

```
use library
db.books.insertMany([
  { title: "The Silent River", author: "Asha Rao", genre: "Fiction", price: 350 },
  { title: "Stars and Atoms", author: "K. Menon", genre: "Science", price: 420 },
  { title: "Empires of Stone", author: "R. Iyer", genre: "History", price: 380 },
  { title: "Monsoon Letters", author: "Nisha Paul", genre: "Fiction", price: 250 },
  { title: "The Curious Cell", author: "A. Sharma", genre: "Science", price: 310 },
  { title: "Kings of the Deccan", author: "S. Reddy", genre: "History", price: 450 },
  { title: "Paper Boats", author: "Leela Das", genre: "Fiction", price: 199 },
  { title: "Light Years Away", author: "M. Khan", genre: "Science", price: 520 },
  { title: "The Spice Route", author: "P. Nair", genre: "History", price: 275 },
  { title: "Midnight Train", author: "Arun Bose", genre: "Fiction", price: 299 },
  { title: "Numbers Everywhere", author: "J. Thomas", genre: "Science", price: 230 },
  { title: "Forts and Flags", author: "D. Gupta", genre: "History", price: 340 }
])
```

## Show this output to the examiner

1. **Terminal.** Run node index.js.  
   Expected: Connected to MongoDB, then Server running at http://localhost:3000
2. **Show all.** Click "Show All Books".  
   Expected: 12 books.
3. **Search.** Choose Fiction and click Search.  
   Expected: 4 books: The Silent River, Monsoon Letters, Paper Boats, Midnight Train.
4. **Filter.** Type 300 in "Price at most" and click Filter.  
   Expected: 5 books: Monsoon Letters, Paper Boats, The Spice Route, Midnight Train, Numbers Everywhere.
5. **3 Cheapest Books.** Click "3 Cheapest Books".  
   Expected: Paper Boats (199), Numbers Everywhere (230), Monsoon Letters (250), in this order.
6. **Add Book.** Fill the form with Title: My First Book, Author: your own name, Genre: Fiction, Price: 320. Click "Add Book".  
   Expected: The message "Book saved" appears and the list shows 13 books, including "My First Book" with your name as the author.
