import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

export default function Shelf( props ) {

  Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    selectChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ props.title }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            props.books.map( ( book, i ) => (
              <li key={ i }>
                <Book
                  info={ book }
                  options={ props.options }
                  selectChange={ props.selectChange }
                />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )

}
