import React, { useState, useEffect } from 'react';
import bg from './thumbnail.png';

export const Welcome = () => {
  const [packages, setPackages] = useState({
    'blip-ds': '',
    'blip-ds-react': ''
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/takenet/blip-ds/releases')
      .then((response) => response.json())
      .then((data) => {
        const blipDsReleases = data.filter((release) => release.name.startsWith('blip-ds@'));
        const blipDsReactReleases = data.filter((release) => release.name.startsWith('blip-ds-react@'));
        
        const latestBlipDs = blipDsReleases.length > 0 ? blipDsReleases[0].name.replace('blip-ds@', '') : '';
        const latestBlipDsReact = blipDsReactReleases.length > 0 ? blipDsReactReleases[0].name.replace('blip-ds-react@', '') : '';
        
        setPackages({
          'blip-ds': latestBlipDs,
          'blip-ds-react': latestBlipDsReact
        });
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
          <bds-grid direction="column" padding="l-6">
            {/* Main Title */}
            <h1 style={{ color: '#fff', fontSize: '64px', fontFamily: 'Nunito Sans', fontWeight: '700', margin: '0 0 20px 0' }}>
              BliP Design System
            </h1>
            
            {/* Package Grid */}
            <bds-grid direction="row" gap="4" margin="b-4">
              {/* blip-ds package */}
              <bds-grid direction="column" gap="1">
                <h3 style={{ color: '#fff', fontSize: '28px', fontFamily: 'Nunito Sans', fontWeight: '600', margin: 0 }}>
                  blip-ds
                </h3>
                <p style={{ color: '#B2DFFD', fontSize: '20px', fontFamily: 'Nunito Sans', fontWeight: '400', margin: '8px 0' }}>
                  {packages['blip-ds']}
                </p>
                {packages['blip-ds'] && (
                  <bds-grid padding="t-1" gap="1">
                    <a
                      style={{ color: '#B2DFFD', textDecoration: 'none', fontFamily: 'Nunito Sans', fontSize: '14px' }}
                      href={`https://www.npmjs.com/package/blip-ds/v/${packages['blip-ds'].replace(/^v/, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on NPM
                    </a>
                    <bds-icon style={{ color: '#B2DFFD' }} name="arrow-right" size="small"></bds-icon>
                  </bds-grid>
                )}
              </bds-grid>
              
              {/* blip-ds-react package */}
              <bds-grid direction="column" gap="1">
                <h3 style={{ color: '#fff', fontSize: '28px', fontFamily: 'Nunito Sans', fontWeight: '600', margin: 0 }}>
                  blip-ds-react
                </h3>
                <p style={{ color: '#B2DFFD', fontSize: '20px', fontFamily: 'Nunito Sans', fontWeight: '400', margin: '8px 0' }}>
                  {packages['blip-ds-react']}
                </p>
                {packages['blip-ds-react'] && (
                  <bds-grid padding="t-1" gap="1">
                    <a
                      style={{ color: '#B2DFFD', textDecoration: 'none', fontFamily: 'Nunito Sans', fontSize: '14px' }}
                      href={`https://www.npmjs.com/package/blip-ds-react/v/${packages['blip-ds-react'].replace(/^v/, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on NPM
                    </a>
                    <bds-icon style={{ color: '#B2DFFD' }} name="arrow-right" size="small"></bds-icon>
                  </bds-grid>
                )}
              </bds-grid>
            </bds-grid>

            {/* Links Section */}
            <bds-grid direction="column" gap="2" margin="t-4">
              <bds-grid padding="t-2" gap="1">
                <a
                  style={{ color: '#B2DFFD', textDecoration: 'none', fontFamily: 'Nunito Sans', fontSize: '16px' }}
                  href="https://design.blip.ai/d/UbKsV1JhXTK4/componentes-desenvolvimento#/visao-geral/todos-os-componentes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uai Design System
                </a>
                <bds-icon style={{ color: '#B2DFFD' }} name="arrow-right"></bds-icon>
              </bds-grid>
              <bds-grid padding="t-2" gap="1">
                <a
                  style={{ color: '#B2DFFD', textDecoration: 'none', fontFamily: 'Nunito Sans', fontSize: '16px' }}
                  href="https://github.com/takenet/blip-ds"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
                <bds-icon style={{ color: '#B2DFFD' }} name="arrow-right"></bds-icon>
              </bds-grid>
            </bds-grid>

            {/* Keyboard Shortcuts Guide */}
            <bds-grid direction="column" gap="1" margin="t-6" padding="t-4" style={{ borderTop: '1px solid rgba(178, 223, 253, 0.3)' }}>
              <p style={{ color: '#B2DFFD', fontSize: '14px', fontFamily: 'Nunito Sans', fontWeight: '600', margin: '0 0 8px 0' }}>
                Keyboard Shortcuts:
              </p>
              <p style={{ color: '#B2DFFD', fontSize: '12px', fontFamily: 'Nunito Sans', margin: '2px 0' }}>
                Press <kbd style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>F</kbd> to toggle sidebar
              </p>
              <p style={{ color: '#B2DFFD', fontSize: '12px', fontFamily: 'Nunito Sans', margin: '2px 0' }}>
                Press <kbd style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>T</kbd> to toggle topbar
              </p>
            </bds-grid>
          </bds-grid>
        </bds-grid>
      </bds-grid>
    </div>
  );
};
