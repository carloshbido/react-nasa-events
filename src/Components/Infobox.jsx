import React from 'react'

function Infobox({info, onCloseLocationBox}) {

  return (
    <div className="info-box">
      <div className="info-box-header">
        <h3> EVENT LOCATION</h3>
        <span onClick={onCloseLocationBox}>X</span>
      </div>
      <ul>
        <li>ID: <strong>{info.id}</strong></li>
        <li>TITLE: <strong>{info.title}</strong></li>
      </ul>
      
    </div>
  )
}

export default Infobox
