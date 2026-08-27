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

          // Remove o "in" que vem antes de um link
          const cleanedTextNoIn = cleanedText.replace(/in\s(http[s]?:\/\/\S+)/g, '$1');

          // Remove o "by" que vem antes do "@" seguido pelo usuário
          const cleanedTextNoBy = cleanedTextNoIn.replace(/by\s@([^\s]+)/g, '');

          // Remove links
          const cleanedTextNoLinks = cleanedTextNoBy.replace(/http[s]?:\/\/\S+/g, '');

          // Remove o usuário com @ e o link que vem depois do usuário
          const cleanedTextNoUser = cleanedTextNoLinks.replace(/@([^\s]+)\s?\S+/g, '');

          // Identifica e move as ocorrências de "Bug Fixes", "Features" ou "What's Changed" para o título
          const lines = cleanedTextNoUser.split('\n');
          const groupedData = { 'Bug Fixes': [], Features: [], "What's Changed": [] };
          let currentGroup = null;

          for (const line of lines) {
            // Ignora a linha que contém "Full Changelog"
            if (line.includes('Full Changelog')) {
              continue;
            }

            if (line.includes('Bug Fixes')) {
              currentGroup = 'Bug Fixes';
            } else if (line.includes('Features')) {
              currentGroup = 'Features';
            } else if (line.includes("What's Changed")) {
              if (release.name.endsWith('.0')) {
                currentGroup = 'Features';
              } else {
                currentGroup = 'Bug Fixes';
              }
            } else if (currentGroup) {
              if (!groupedData[currentGroup].includes(line)) {
                groupedData[currentGroup].push(line);
              }
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
        <bds-typo bold="extra-bold" variant="fs-32">
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
