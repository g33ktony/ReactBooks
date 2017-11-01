import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import { SearchBar } from '../Routes'
import Shelf from '../components'


export default class Router extends Component {

  state = {
    query: '',
    currentlyReading: [],
    wantToRead: [],
    read: [],
    results: [],
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    BooksAPI.getAll().then( books => {
      this.setState({ myBooks: books })
      this.setShelf('currentlyReading', books)
      this.setShelf('wantToRead', books)
      this.setShelf('read', books)
    }).catch( e => console.log('Error', e.message) )
  }

  setShelf( name, books ) {
    const filtered = books.filter( book => {
      return book.shelf === name
    }).map( book => {
      return {
        title: book.title ? book.title : '',
        authors: book.authors ? book.authors : [],
        imageURL: book.imageLinks ? book.imageLinks.thumbnail : '',
        shelf: book.shelf ? book.shelf : '',
        id: book.id ? book.id : ''
      }
    })
    this.setState({ [name]: filtered })
  }

  onChange = (event) => {
    const query = event.target.value
    this.searchBooks( query )
  }

  selectChange = (event, book) => {
    const select = event.target.value
    BooksAPI.update( book, select )
    .then( success => {
      this.getBooks()
    })
    .catch( e => console.log('Error updating', e.message))
  }

  searchBooks( query ) {
    if (query !== '') {
      BooksAPI.search( query, 2 ).then( res => {
        // console.log('res', res);
        if (!res.error) {
          const results = res.map( book => {
            const duplicate = this.state.myBooks.find( el => ( el.id === book.id ) )
            return {
              title: book.title ? book.title : '',
              authors: book.authors ? book.authors : [],
              imageURL: book.imageLinks ? book.imageLinks.thumbnail : '',
              shelf: duplicate ? duplicate.shelf : 'none',
              id: book.id ? book.id : ''
            }
          })
          this.setState({ results })
        }else {
          this.setState({ results: [] })
        }
      }).catch( e => console.log('Error', e.message))
    }else {
      this.setState({ results: [] })
    }
  }

  render() {

    return (
      <div className="app">
      <Route
        path='/'
        exact
        render={ () => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf selectChange={ this.selectChange } title='Currently Reading' books={ this.state.currentlyReading } />
                  <Shelf selectChange={ this.selectChange } title='Want to Read' books={ this.state.wantToRead }/>
                  <Shelf selectChange={ this.selectChange } title='Read' books={ this.state.read }/>
                </div>
              </div>
              <div className="open-search">
                <Link
                  to='/search'
                >Add a book</Link>
              </div>
            </div>
        ) }
      />
      <Route
        path='/search'
        exact
        render={ () => (
          <SearchBar selectChange={ this.selectChange } results={ this.state.results } onChange={ this.onChange } />
        ) }
      />
    </div>
    )

  }

}
