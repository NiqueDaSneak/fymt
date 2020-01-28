import React from 'react'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'

const TimeChooser = (props) => {
  var state = {
    date: new Date(),
  }
 
  const onChange = date => this.setState({ date })
    return(
      <>
        <DateTimePicker
          onChange={onChange}
          value={state.date} />
      </>
    )
}

export default TimeChooser