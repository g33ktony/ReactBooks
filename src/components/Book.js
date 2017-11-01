import React from 'react'
import Select from './Select'
import PropTypes from 'prop-types'


export default function Book( props ) {

  Book.propTypes = {
    selectChange: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired
  }

  return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${ props.info.imageURL }')` }}/>
          <div className="book-shelf-changer">
            <Select
              id={ props.info.id }
              onChange={ event => props.selectChange( event, props.info ) }
              options={ props.options }
              selected={ props.info.shelf }
            />
          </div>
        </div>
        <div className="book-title">{ props.info.title }</div>
        {
          props.info.authors.map( ( author, i ) => (
            <div
              className="book-authors"
              key={ i }
            >{ author }</div>
          ) )
        }
      </div>
  )


}
