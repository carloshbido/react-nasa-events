import React , { useState } from 'react';

const InfoProject = () => {

  const[toogleBox, setToogleBox] = useState(false);

  const toogleBoxFn = () => {
    !toogleBox ? setToogleBox(true) : setToogleBox(false)
  }

  if (!toogleBox) {
    return (
      <div className="info-project hidden"> 
        <h3>About this project</h3>
        <span className="info-project-close hidden" onClick={toogleBoxFn}> Open </span> 
      </div>
    )
  }
  
  return (
    <div className="info-project">
      <span className="info-project-close" onClick={toogleBoxFn}> Close </span>
      
      <div className="info-project-content">
        <h3>Author</h3>
        <p>Carlos Bido from Brasil <a href="https://github.com/carloshbido"> Github </a></p>

        <h3>About this project</h3>
        <p>This project was inspired by <a href="https://www.youtube.com/watch?v=ontX4zfVqK8&t=1598s"> Traversy Media </a> project but there are a few upgrades than original project</p>

        <h3>Motivation</h3>
        <p>Creating a portfolio and to study React and its peculiarities</p>

        <h3>Techs</h3>
        <p>React Hooks, Google Maps API, Iconify Pack, Public NASA API</p>
      </div>
    </div>
  );
}

export default InfoProject;
