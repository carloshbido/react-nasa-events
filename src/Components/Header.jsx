import React from 'react'

const Header = (props) => {

  return (
    <header>
     <span> World Events Tracker (Powered by NASA API) </span>
     <div>  
      What do you want to track?

      {/* //The option´s values are based on NASA API, to see the ids, verify events.json*/}
      <select onChange={e => props.onGetEvent(e.target.value)}>
        <option value="8">WildFire</option>
        <option value="12">Volcanoes</option>
        <option value="17">Snow</option>
        <option value="18">Temperature Extremes</option>
      </select>
      </div>
    </header>
  )
}

export default Header
