import React from 'react'
import Select from './Select'


export default function Book( props ) {

  const options = [
    { value: 'move', disabled: true, text: 'Move to...' },
    { value: 'currentlyReading', disabled: false, text: 'Currently Reading' },
    { value: 'wantToRead', disabled: false, text: 'Want to Read' },
    { value: 'read', disabled: false, text: 'Read' },
    { value: 'none', disabled: false, text: 'None' },
  ]

  return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${ props.info.imageURL }')` }}/>
          <div className="book-shelf-changer">
            <Select onChange={ event => props.selectChange( event, props.info ) } selected={ props.info.shelf } id={ props.info.id } options={ options } />
          </div>
        </div>
        <div className="book-title">{ props.info.title }</div>
        {
          props.info.authors.map( ( author, i ) => (
            <div key={ i } className="book-authors">{ author }</div>
          ) )
        }
      </div>
  )


}
