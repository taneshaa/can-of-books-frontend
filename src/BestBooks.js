import React from 'react';
import axios from 'axios';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';


let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data
      })
    } catch (error) {
      // console.log('error', error.response);
    }
  }

  componentDidMount() {
    this.getBooks();
  }


  /* TODO: Make a GET request to your API to fetch books for the logged in user  */


  render() {
    let books = this.state.books.map(book => (
      <p key={book._id}>{book.title}:{book.description}</p>
    ))

    /* TODO: render user's books in a Carousel */

    return (
      <>
      <main>
        {books}
      </main>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
