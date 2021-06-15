import React, {useState} from 'react'

const Header = () => {

  const [event, setEvent] = useState('wildfire')

  function handleEventsOption(e) {
    setEvent(e.target.value);
  }

  console.log(event)

  return (
    <header>
     <span> World Events Tracker (Powered by NASA API) </span>
     <div>  
      What do you want to track?
      <select onChange={handleEventsOption}>
        <option value="wildfire">WildFire</option>
        <option value="sea-lake-ice">Sea and Lake Ice</option>
      </select>
      </div>
    </header>
  )
}

export default Header
