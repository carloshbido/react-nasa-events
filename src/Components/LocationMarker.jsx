import React from 'react'
import { Icon } from '@iconify/react';
import fireTwotone from '@iconify-icons/ant-design/fire-twotone';

const LocationMarker = (props) => {
  return (
    <div className="location" onClick={props.onClick}>
      <Icon icon={fireTwotone} className="location-icon"/>
    </div>
  )
}

export default LocationMarker
