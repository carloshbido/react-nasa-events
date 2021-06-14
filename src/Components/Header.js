import React from 'react'
import { Icon } from '@iconify/react';
import fireTwotone from '@iconify-icons/ant-design/fire-twotone';


const Header = () => {
  return (
    <header>
     <Icon icon={fireTwotone} className="icon-header"/> <strong> WildFire Tracker (Powered by NASA API) </strong>
    </header>
  )
}

export default Header
