import React from 'react'
import { Link } from 'react-router-dom'
import { Book } from '../components'

export default function SearchBar( props ) {

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to='/'/>
        <div className="search-books-input-wrapper">
          <input type="text" value={ props.value } onChange={ props.onChange } placeholder="Search by title or author"/>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            props.results.map( ( book, i ) => (
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
