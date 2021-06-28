import React from 'react'
import { Icon } from '@iconify/react';

//Icons import
import fireTwotone from '@iconify-icons/ant-design/fire-twotone';
import volcano15 from '@iconify-icons/maki/volcano-15';
import snowIcon from '@iconify-icons/bi/snow';
import temperatureHigh from '@iconify-icons/fa-solid/temperature-high';
import seaIcon from '@iconify-icons/whh/sea';


const LocationMarker = ({logoId, onClick}) => {
  
  const logo = () => {
  
    switch (logoId) {
      case 8:
        return {logo: fireTwotone, color: 'red'}; 
        break;

      case 12:
        return {logo: volcano15, color: 'brown'};
        break;

      case 15:
        return {logo: seaIcon, color: 'blue'};
        break;

      case 17:
        return {logo: snowIcon, color: 'blue'};
        break;

      case 17:
        return {logo: temperatureHigh, color: 'orange'};
        break;
    }
  }

  return (
    <div className="location" onClick={onClick}>
      <Icon 
        icon={logo().logo} 
        style={{color: logo().color, fontSize: '25px'}}/>
    </div>
  )
}



export default LocationMarker
