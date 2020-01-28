import React from 'react'
imp
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'

const TimeChooser = (props) => {
  var state = {
    date: new Date(),
  }
 
  // const onChange = date => this.setState({ date })
    return(
      <>
        <input 
          type="datetime-local" 
          id="meeting-time"
          name="meeting-time" 
          value="2018-06-12T19:30"
          min="2018-06-07T00:00" 
          max="2018-06-14T00:00" />
      </>
    )
}

export default TimeChooser