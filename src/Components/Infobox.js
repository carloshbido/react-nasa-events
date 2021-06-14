import React from 'react'

function Infobox({info}) {

  return (
    <div className="info-box">
      <h2> EVENT LOCATION </h2>
      <ul>
        <li>ID: <strong>{info.id}</strong></li>
        <li>TITLE: <strong>{info.title}</strong></li>
      </ul>
      
    </div>
  )
}

export default Infobox
