import React from 'react'
import Book from './Book'

export default function Shelf( props ) {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ props.title }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            props.books.map( ( book, i ) => (
              <li key={ i }>
                <Book selectChange={ props.selectChange } info={ book }/>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )

}
