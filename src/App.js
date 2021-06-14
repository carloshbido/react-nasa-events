import React, {useState, useEffect} from 'react'
import Map from './Components/Map.js';

function App() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

      const fetchData = async () => {
        setLoading(true);

        const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
        const { events } = await response.json();
      
        setEventsData(events);
        setLoading(false);
      }
  
      fetchData()
  }, [])

  return (
    <div className="App">
      {!loading 
        ? <Map eventsData={eventsData}></Map> 
        : <h1>Loading</h1>
        }
    </div>
  );
}

export default App;
