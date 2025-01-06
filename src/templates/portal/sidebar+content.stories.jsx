import React from 'react';
import {
  BdsTypo,
  BdsGrid,
  BdsSidebar,
  BdsNavTree,
  BdsNavTreeGroup,
  BdsNavTreeItem,
  BdsIcon,
  BdsButton,
  BdsInput,
  BdsPaper,
  BdsTooltip
} from '../../../blip-ds-react/dist/components';

export default {
  title: 'Templates/Portal/Sidebar + Content',
};

export const SidebarContent = (args) => (
  <BdsGrid direction='row' xxs='12' height='100%'>
    {/* Sidebar */}
    <BdsGrid>
      <BdsSidebar width="310px" type='fixed' background='surface-1'>
        <BdsGrid slot='body'>
          <BdsNavTreeGroup collapse="single">
            <BdsNavTree text="Titulo" secondaryText="Breve descrição"></BdsNavTree>
            <BdsNavTree text="Titulo" secondaryText="Breve descrição"></BdsNavTree>
            <BdsNavTree text="Titulo" secondaryText="Breve descrição" icon='heart'>
            <BdsNavTreeItem text="Titulo"></BdsNavTreeItem>
            <BdsNavTreeItem text="Titulo"></BdsNavTreeItem>
              <BdsNavTreeItem text="Titulo">
                <BdsNavTreeItem text="Titulo">
                  <BdsNavTreeItem text="Titulo"></BdsNavTreeItem>
                </BdsNavTreeItem>
              </BdsNavTreeItem>
            </BdsNavTree>
            <BdsNavTree text="Titulo" secondaryText="Breve descrição">
              <BdsNavTreeItem text="Titulo"></BdsNavTreeItem>
            </BdsNavTree>
          </BdsNavTreeGroup>
        </BdsGrid>
      </BdsSidebar>
    </BdsGrid>
    <BdsGrid bgColor='color-surface-2' xxs='auto'>
      <BdsGrid container xxs='12' direction='column'>
        <BdsGrid margin='x-auto' padding='y-4' justifyContent='space-between' xxs='12'>
          <BdsGrid direction='row' alignItems='center' gap="1">
            <BdsButton iconLeft='arrow-left' color='content' variant='text'></BdsButton>
            <BdsTypo variant='fs-24' bold='bold' margin="false">Título da página 24px-h3, Bold</BdsTypo>

          </BdsGrid>
          <BdsGrid gap='2'>
            <BdsButton iconLeft='info' variant='outline' color='content'></BdsButton>
            <BdsButton variant='outline' color='content'>Verbo + complemento</BdsButton>
            <BdsButton>Verbo + complemento</BdsButton>
          </BdsGrid>
        </BdsGrid>
        <BdsGrid xxs='6' margin='y-4'>
          <BdsInput placeholder='Digite o nome do produto que está procurando' icon='search'></BdsInput>
        </BdsGrid>
        <BdsGrid margin='y-4' flexWrap='wrap'>
          <BdsGrid xxs='6' height='260px'>
            <BdsPaper width='100%'>
              <BdsGrid padding='2' direction='column'>
                <BdsGrid alignItems='center' gap='1'>
                  <BdsTypo variant='fs-20' bold='bold' margin='false'>Título do card 1, $fs-20-h4/Bold</BdsTypo>
                  <BdsTooltip tooltipText='Top Center'><BdsIcon name='info' size='x-small'></BdsIcon></BdsTooltip>
                </BdsGrid>
                <BdsGrid>
                  <BdsTypo>Subtítulo do card 1, explicando conteúdo</BdsTypo>
                </BdsGrid>
              </BdsGrid>
            </BdsPaper>
          </BdsGrid>
          <BdsGrid xxs='6' height='260px'>
            <BdsPaper width='100%'>
              <BdsGrid padding='2' direction='column'>
                <BdsGrid alignItems='center' gap='1'>
                  <BdsTypo variant='fs-20' bold='bold' margin='false'>Título do card 2, $fs-20-h4/Bold</BdsTypo>
                </BdsGrid>
              </BdsGrid>
            </BdsPaper>
          </BdsGrid>
          <BdsGrid xxs='12' padding='t-2' height='260px'>
            <BdsPaper width='100%'>
              <BdsGrid padding='2' direction='column'>
                <BdsGrid alignItems='center' gap='1'>
                  <BdsTypo variant='fs-20' bold='bold' margin='false'>Título do card 3, $fs-20-h4/Bold</BdsTypo>
                </BdsGrid>
              </BdsGrid>
            </BdsPaper>
          </BdsGrid>
        </BdsGrid>

      </BdsGrid>

    </BdsGrid>
  </BdsGrid>
);