import React from 'react'

const Header = () => {
  return (
    <header>
     <span> World Events Tracker (Powered by NASA API) </span>
     <div>  
      What do you want to track?
      <select>
        <option value="wildfire">WildFire</option>
        <option value="storms">Storms</option>
      </select>
      </div>
    </header>
  )
}

export default Header
