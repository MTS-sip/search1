# # Virtual Book Find

## Links

- Link 🟢 Deployed URL 🔹 [Virtual Book Find}( 🔹

- Link 🔴 GitHub Repository [https://github.com/MTS-sip/search1 🔴

## Description

Google Book Search App: Book results fetched from the Google Books API, including book title, author, and action buttons (e.g saving), with Login/Signup authentication.

### Table of Contents

- Usage
- Images
- License
- Technology
- Contributing
- User Story &
- Acceptance Criteria

### Usage & Testing

For usage.

- Clone Repository [Clone Repository](https://github.com/MTS-sip/search1)
- npm install<br>
- Create .env for connection to a MongoDB<br>
  MONGO_URI=(the DB you are connecting to)<br>
  JWT_SECRET=(create secret key)<br>
- Run dev script in package.json<br>

- [Virtual Book Find](https://github.com/MTS-sip/search1))

### App Screenshots

### 📚 Google Books Results

Displays a list of book results fetched from the Google Books API, including book title, author, and action buttons for saving.

![Google Books Results](./client/src/assets/GooGleBooks.png)

---

- 🔐 Login Page

User authentication page with fields for entering email and password.

![Login Page](./client/src/assets/Login.png)

---

### 🔎 Book Search Interface

Interface allowing users to search for books by keyword and display real-time results from the API.

![Search Interface](./client/src/assets/search.png)

### License

This project is licensed under the MIT<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Technology

Key technologies used for development:

🔹 **VS Code**: [VSC IDE](https://code.visualstudio.com/)<br>
🔹 **Render**: [Cloud Application Platform Render](https://render.com/)<br>
🔹 **GitHub**: [Github](https://github.com/)<br>
🔹 **Vite**: [ Front end Build Tool for the Web](https://vite.dev/)<br>
🔹 **Typescript**: [JavaScript w/syntax for types ](https://www.w3schools.com/typescript/typescript_intro.php)<br>
🔹 **npm**: [Package manager for js](https://www.npmjs.com/)<br>
🔹 **CoPilot**: [Copilot for GitHub](https://github.com/features/copilot?ef_id=_k_Cj0KCQjw4v6-BhDuARIsALprm30F26jOBa_tX-MdbRzSHmPNFiQCmfhZXt1XYobPc8mf7E3NM44SAmQaAipREALw_wcB_k_&OCID=AIDcmmb150vbv1_SEM__k_Cj0KCQjw4v6-BhDuARIsALprm30F26jOBa_tX-MdbRzSHmPNFiQCmfhZXt1XYobPc8mf7E3NM44SAmQaAipREALw_wcB_k_&gad_source=1&gclid=Cj0KCQjw4v6-BhDuARIsALprm30F26jOBa_tX-MdbRzSHmPNFiQCmfhZXt1XYobPc8mf7E3NM44SAmQaAipREALw_wcB)<br>
**MonGoDB**:[MONGODB ATLAS](https://www.mongodb.com/)
**ApolloServer**: [apollographql](https://www.apollographql.com/docs/apollo-server)

### Contributing

MTS-Sip [aka MPossible](https://github.com/MTS-sip)<br>
Dev/Starter Code, RU BCS

### User Story

🔹 AS AN employer avid reader

- I WANT to search for new books to read
- SO THAT I can keep a list of books to purchase

### Acceptance Criteria

🔹 GIVEN a a book search engine

- WHEN I load the search engine <br>
  THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
- WHEN I click on the Search for Books menu option <br>
  THEN I am presented with an input field to search for books and a submit button
- WHEN I am not logged in and enter a search term in the input field and click the submit button<br>
  THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
- WHEN the toggle is set to Signup <br>
  THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
- WHEN the toggle is set to Login <br>
  THEN I am presented with two inputs for an email address and a password and login button
- WHEN the I enter a valid email address and create a password and click on the signup button <br>
  THEN my user account is created and I am logged in to the site
- WHEN I enter my account’s email address and password and click on the login button<br>
  THEN the modal closes and I am logged in to the site
- WHEN I am logged in to the site<br>
  THEN the menu options change to Search for Books, an option to see my saved books, and Logout
- WHEN I am logged in and enter a search term in the input field and click the submit button<br>
  THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
- WHEN I click on the Save button on a book<br>
  THEN that book’s information is saved to my account
- WHEN I click on the option to see my saved books<br>
  THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
- WHEN I I click on the Remove button on a book<br>
  THEN that book is deleted from my saved books list
- WHEN I I click on the Logout button<br>
