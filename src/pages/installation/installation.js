import React, {useState, useEffect} from 'react';

export const Installation = () => {
  
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
  >
    <bds-typo variant="fs-24" style={{color: '#fff', top: '20px'}}>{data}</bds-typo>
    
  </div>
);
}

