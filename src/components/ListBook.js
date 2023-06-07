import React, { Fragment, useEffect, useState } from "react";
import EditBook from "./EditBook";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  const deleteBook = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        setBooks(books.filter((book) => book.book_number !== id));
      } else {
        console.error(`Error deleting book with ID ${id}`);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:3000/books");
      const jsonData = await response.json();

      setBooks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
          <th>Book Number</th>
          <th>Book Name</th>
            <th>Publication Year</th>
            <th>Pages</th>
            <th>Publisher Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {books.map(book => (
            <tr key={book.book_number}>
            <td>{book.book_number}</td>
            <td>{book.book_name}</td>
              <td>{book.publication_year}</td>
              <td>{book.pages}</td>
              <td>{book.publisher_name}</td>
              <td>
                <EditBook book={book} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBook(book.book_number)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListBooks;