import React ,{ useState } from 'react'
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import Header from './Header';
import Infobox from './Infobox';

const Map = (props) => {

  const [locationBox, setLocationBox] = useState(null);

  const markers = props.eventsData.map(event => {
  
    if (event.categories[0].id === 8) {

      const getLat = event.geometries[0].coordinates[1];
      const getLgn = event.geometries[0].coordinates[0];

      return <LocationMarker key={event.id} lat={getLat} lng={getLgn} onClick={() => setLocationBox({id: event.id, title: event.title}) } />
    }

    return null;
  
  })

  return (
    <div className="map">
      <Header />
      <GoogleMapReact
        bootstrapURLKeys = {{key: 'AIzaSyBGpI2F95nQJRlQLvJHEIR4cljKD-Znb9U'}}
        defaultCenter = {props.center}
        defaultZoom = {props.zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationBox && <Infobox info={locationBox}/> }
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
}

export default Map

