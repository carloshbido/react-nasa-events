import React from 'react'
import { Icon } from '@iconify/react';

//Icons import
import fireTwotone from '@iconify-icons/ant-design/fire-twotone';
import volcano15 from '@iconify-icons/maki/volcano-15';
import snowIcon from '@iconify-icons/bi/snow';
import temperatureHigh from '@iconify-icons/fa-solid/temperature-high';


const LocationMarker = ({logoId, onClick}) => {
  
  const logo = () => {
  
    switch (logoId) {
      case 8:
        return fireTwotone; 
        break;

      case 12:
        return volcano15;
        break;

      case 17:
        return snowIcon;
        break;

      case 17:
        return temperatureHigh;
        break;
    }
  }

  console.log('Logo', logo())

  return (
    <div className="location" onClick={onClick}>
      <Icon icon={logo()} style={locationIcon}/>
    </div>
  )
}

const locationIcon = {
  fontSize: '25px',
  color: 'red'
  }



export default LocationMarker
