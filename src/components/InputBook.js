import React, { Fragment, useState } from "react";

const InputBook = () => {
  const [book_number, setBookNumber] = useState("");
  const [book_name, setBookName] = useState("");
  const [publication_year, setPublicationYear] = useState("");
  const [pages, setPages] = useState("");
  const [publisher_name, setPublisherName] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        book_number,
        book_name,
        publication_year,
        pages,
        publisher_name,
      };
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Input Books</h1>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label htmlFor="book_number">Book Number</label>
          <input
            type="text"
            className="form-control"
            id="book_number"
            placeholder="Enter book number"
            value={book_number}
            onChange={(e) => setBookNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="book_name">Book Name</label>
          <input
            type="text"
            className="form-control"
            id="book_name"
            placeholder="Enter book name"
            value={book_name}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="publication_year">Publication Year</label>
          <input
            type="text"
            className="form-control"
            id="publication_year"
            placeholder="Enter publication year"
            value={publication_year}
            onChange={(e) => setPublicationYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pages">Pages</label>
          <input
            type="text"
            className="form-control"
            id="pages"
            placeholder="Enter number of pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="publisher_name">Publisher Name</label>
          <input
            type="text"
            className="form-control"
            id="publisher_name"
            placeholder="Enter publisher name"
            value={publisher_name}
            onChange={(e) => setPublisherName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputBook;
