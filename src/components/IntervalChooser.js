import React from 'react'

const IntervalChooser = (props) => {
    return(
      <select>
        <option value="volvo">Every 30 minutes</option>
        <option value="saab">Every Hour</option>
        <option value="mercedes">Every 2 Hours</option>
        <option value="audi">Every 6 Hours</option>
        <option value="audi">Every 8 Hours</option>
        <option value="audi">Every 12 Hours</option>
        <option value="audi">Every 24 Hours</option>
      </select>
    )
}

export default IntervalChooser