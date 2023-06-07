import React, { Fragment, useState } from "react";

const EditBook = ({ book }) => {
  const [bookName, setBookName] = useState(book.book_name);
  const [publicationYear, setPublicationYear] = useState(book.publication_year);
  const [pages, setPages] = useState(book.pages);
  const [publisherName, setPublisherName] = useState(book.publisher_name);
  const [error, setError] = useState(null);

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      const body = {
        book_name: bookName,
        publication_year: publicationYear,
        pages,
        publisher_name: publisherName,
      };
      const response = await fetch(
        `http://localhost:3000/books/${book.book_number}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      window.location = "/";
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${book.book_number}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${book.book_number}`}
        onClick={() => {
          setBookName(book.book_name);
          setPublicationYear(book.publication_year);
          setPages(book.pages);
          setPublisherName(book.publisher_name);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Book</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setBookName(book.book_name);
                  setPublicationYear(book.publication_year);
                  setPages(book.pages);
                  setPublisherName(book.publisher_name);
                }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="form-group">
                <label htmlFor="book_name">Book Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="book_name"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="publication_year">Publication Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="publication_year"
                  value={publicationYear}
                  onChange={(e) => setPublicationYear(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pages">Pages</label>
                <input
                  type="text"
                  className="form-control"
                  id="pages"
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
                  value={publisherName}
                  onChange={(e) => setPublisherName(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateBook(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setBookName(book.book_name);
                  setPublicationYear(book.publication_year);
                  setPages(book.pages);
                  setPublisherName(book.publisher_name);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBook;
