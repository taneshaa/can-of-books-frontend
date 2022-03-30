import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';
// import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';


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
    console.log('test statwe', this.state);
    // let books = this.state.books.map(book => (
    //   <p key={book._id}>{book.title}: {book.description}</p>
    // ))

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
       
          {/* {books} */}
          {this.state.books.length ? (

            <div style={{ display: 'block', width: 700, padding: 30 }}>
              <h4>React-Bootstrap Carousel Component</h4>
              <Carousel>
                {this.state.books.map(book => {
                  return (
                    <Carousel.Item interval={1500}>
                      {/*caro.item key={book._id*/}
                      <img
                        className="d-block w-100"
                        src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg"
                        alt="One"
                      />
                      <Carousel.Caption>
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                })}
              </Carousel>
            </div>


          ) : (
            <h3>No Books Found</h3>
          )}
        
      </>
    )
  }
}

export default BestBooks;
