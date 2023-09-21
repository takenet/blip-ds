import React, {useState, useEffect} from 'react';
import bg from './thumbnail.png'

export const Welcome = () => {
  
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/takenet/blip-ds/releases')
      .then(response => response.json())
      .then(data => {
        const firstReleaseName = data[0].name;
    setData(firstReleaseName)
      });
  }, []);

  console.log(data[0])
  // console.log(data[0]['name'])
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
    <bds-typo variant="fs-24" style={{color: '#fff', top: '20px'}}>{data}</bds-typo>
    
  </div>
);
}

