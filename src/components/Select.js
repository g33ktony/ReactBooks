import React from 'react'
import PropTypes from 'prop-types'


export default function Select( props ) {

  Select.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
  }

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
