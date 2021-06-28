import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react';

//Local Imports
import LocationMarker from './LocationMarker.jsx';
import Header from './Header.jsx';
import Infobox from './Infobox.jsx';
import InfoProject from './InfoProject.jsx';

const Map = (props) => {

  const [locationBox, setLocationBox] = useState(null);
  const [eventId, setEventId] = useState(8);

  function closeLocationBox() {
    setLocationBox(null);
  }

  function getEvent(value) {
    setEventId(Number(value));
  }

  const markersLocation = props.eventsData.map(event => {

    const eventExist = event.categories[0].id === eventId;
    
    if (eventExist) {

      const getLat = event.geometries[0].coordinates[1];
      const getLgn = event.geometries[0].coordinates[0];
      const logoId = event.categories[0].id;

      return (
        <LocationMarker 
          key={event.id} 
          lat={getLat} 
          lng={getLgn} 
          logoId={logoId} 
          onClick={() => setLocationBox({id: event.id, title: event.title})} 
        />);
    }
    
    return null;

  });

  return (
    <div className="map">
      <Header onGetEvent={getEvent}/>
      
      <GoogleMapReact
        bootstrapURLKeys = {{key: 'AIzaSyBGpI2F95nQJRlQLvJHEIR4cljKD-Znb9U'}}
        defaultCenter = {props.center}
        defaultZoom = {props.zoom}
      >
        
        {markersLocation}
      
      </GoogleMapReact>
      
      { locationBox && 
        <Infobox info={locationBox} onCloseLocationBox={closeLocationBox}/> 
      }

      <InfoProject />
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 4,
}

export default Map

