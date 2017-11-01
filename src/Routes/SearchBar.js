import React from 'react'
import { Link } from 'react-router-dom'
import { Book } from '../components'
import PropTypes from 'prop-types'

export default function SearchBar( props ) {

  SearchBar.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    results: PropTypes.array.isRequired,
    selectChange: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link onClick={ props.clearSearch } className="close-search" to='/'/>
        <div className="search-books-input-wrapper">
          <input type="text" value={ props.value } onChange={ props.onChange } placeholder="Search by title or author"/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            props.results.map( ( book, i ) => (
              <li key={ i }>
                <Book options={ props.options } selectChange={ props.selectChange } info={ book }/>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )

}
