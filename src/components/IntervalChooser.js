import React from 'react'
import styled from 'styled-components'

const DropDown = styled.select`
    display: block;
    font-size: 16px;
    color: #444;
    padding: 2%;
    width: 60%;
    text-align: center;
    border: 1px solid #aaa;
    border-radius: 8px;
    appearance: none;
    background-color: #fff;
.select-css::-ms-expand {
    display: none;
}
.select-css:hover {
    border-color: #888;
}
.select-css:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222; 
    outline: none;
}
.select-css option {
    font-weight:normal;
}

`

const IntervalChooser = (props) => {
    return(
      <DropDown>
        <option value="volvo">Every 30 minutes</option>
        <option value="saab">Every Hour</option>
        <option value="mercedes">Every 2 Hours</option>
        <option value="audi">Every 6 Hours</option>
        <option value="audi">Every 8 Hours</option>
        <option value="audi">Every 12 Hours</option>
        <option value="audi">Every 24 Hours</option>
      </DropDown>
    )
}

export default IntervalChooser