import React, { useState, useEffect } from 'react';

export const Releases = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/takenet/blip-ds/releases')
      .then((response) => response.json())
      .then((data) => {
        const releaseEntries = data.map((release) => {
          // Use expressões regulares para remover [ ], ( ), bem como os símbolos #, * e )
          const cleanedText = release.body.replace(/\[.*?\]|\(.*?\)|[#*)]/g, '');

          // Identifica e move as ocorrências de "Bug Fixes" ou "Features" para o título
          const lines = cleanedText.split('\n');
          const groupedData = { 'Bug Fixes': [], Features: [] };
          let currentGroup = null;

          for (const line of lines) {
            if (line.includes('Bug Fixes')) {
              currentGroup = 'Bug Fixes';
            } else if (line.includes('Features')) {
              currentGroup = 'Features';
            } else if (currentGroup) {
              groupedData[currentGroup].push(line);
            }
          }

          const dataISO8601 = release.created_at;
          const dataBrasileira = new Date(dataISO8601).toLocaleDateString('pt-BR');

          return {
            name: release.name,
            created_at: dataBrasileira,
            data: groupedData,
          };
        });

        setData(releaseEntries);
      });
  }, []);

  return (
    <bds-grid xxs="12" height="100%" margin="auto" direction="column" gap="4">
      <bds-grid>
        <bds-typo bold="bold" variant="fs-32">
          Releases
        </bds-typo>
      </bds-grid>
      {data.map((entry, index) => (
        <bds-paper border="true" key={index}>
          <bds-grid padding="3" direction="column">
            <bds-typo bold="bold">{entry.name}</bds-typo>
            <bds-typo variant="fs-12">{entry.created_at}</bds-typo>
            <bds-grid padding="y-3" direction="column">
              {entry.data['Bug Fixes'].length > 0 && (
                <bds-grid direction="column" padding="y-2">
                  <bds-typo bold="bold" tag="h2">
                    Bug Fixes
                  </bds-typo>
                  {entry.data['Bug Fixes'].map((bugFix, bugFixIndex) => (
                    <bds-typo key={bugFixIndex}>{bugFix}</bds-typo>
                  ))}
                </bds-grid>
              )}
              {entry.data['Features'].length > 0 && (
                <>
                  <bds-typo bold="bold" tag="h2">
                    Features
                  </bds-typo>
                  {entry.data['Features'].map((feature, featureIndex) => (
                    <bds-typo key={featureIndex}>{feature}</bds-typo>
                  ))}
                </>
              )}
            </bds-grid>
          </bds-grid>
        </bds-paper>
      ))}
    </bds-grid>
  );
};
