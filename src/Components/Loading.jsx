import React from 'react';
import Spinner from '../Images/loading.gif'

const Loading = () => {
  return (
    <div className="loading">
      <h1>Loading...</h1>
      <h3>World Events Tracker (Powered by NASA API)</h3>
      <img src={Spinner} alt="Loader" />
    </div>
  );
}

export default Loading;
