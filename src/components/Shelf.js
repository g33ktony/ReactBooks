import React from 'react'


export default function Shelf( props ) {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ props.title }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            props.books.map( book => (
              <li>
                <Book />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )

}
