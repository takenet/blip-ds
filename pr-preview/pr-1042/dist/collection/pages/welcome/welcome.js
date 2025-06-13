import React, { useState, useEffect } from 'react';
import bg from './thumbnail.png';

export const Welcome = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/takenet/blip-ds/releases')
      .then((response) => response.json())
      .then((data) => {
        const firstReleaseName = data[0].name;
        setData(firstReleaseName);
      });
  }, []);
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
      <bds-grid height="100%">
        <bds-grid align-items="flex-start" margin="t-6">
          <bds-grid direction="column" height="200px" padding="l-6">
            <h2 style={{ color: '#fff', fontSize: '54px', fontFamily: 'Nunito Sans', fontWeight: '300', margin: 0 }}>
              @blip-ds/components
            </h2>
            <h4
              variant="fs-40"
              tag="h4"
              bold="bold"
              style={{
                color: '#fff',
                paddingLeft: '8px',
                fontWeight: '600',
                fontSize: '54px',
                fontFamily: 'Nunito Sans',
                margin: 0,
              }}
            >
              {data}
            </h4>
            <bds-grid padding="t-3" gap="1">
              <a
                style={{ color: '#B2DFFD', textDecoration: 'none', fontFamily: 'Nunito Sans', alignItems: 'center' }}
                href="https://design.blip.ai/d/UbKsV1JhXTK4/componentes-desenvolvimento#/visao-geral/todos-os-componentes"
              >
                Uai Design System
              </a>
              <bds-icon style={{ color: '#B2DFFD' }} name="arrow-right"></bds-icon>
            </bds-grid>
            <bds-grid padding="t-3" gap="1">
              <a
                style={{ color: '#B2DFFD', textDecoration: 'none', fontFamily: 'Nunito Sans', alignItems: 'center' }}
                href="https://github.com/takenet/blip-ds"
              >
                Github repo
              </a>
              <bds-icon style={{ color: '#B2DFFD' }} name="arrow-right"></bds-icon>
            </bds-grid>
          </bds-grid>
        </bds-grid>
      </bds-grid>
    </div>
  );
};
