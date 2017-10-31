import React from 'react'


export default function Select( props ) {

  return (
    <select>
      {
        props.options.map( op => (
          <option value={ option.value } disabled={ option.disabled }>{ option.text }</option>
        ))
      }      
    </select>
  )

}
