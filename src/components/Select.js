import React from 'react'


export default function Select( props ) {

  return (
    <select
      value={ props.selected }
      onChange={ props.onChange }
    >
      {
        props.options.map( (op, i) => (
          <option value={ op.value } key={ i } disabled={ op.disabled }>{ op.text }</option>
        ))
      }
    </select>
  )

}
