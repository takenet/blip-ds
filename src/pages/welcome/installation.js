import React from 'react';
import bg from './thumbnail.png'

export const Welcome = () => {
  
  return (
  <div
    className="welcome__container"
    style={{
      background: `url(${bg}) no-repeat center center fixed`,
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: '0',
      left: '0',
    }}
  >
  </div>
);
}

