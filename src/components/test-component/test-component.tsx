import { Component, h } from '@stencil/core';

@Component({
  tag: 'bds-test-component',
  styleUrl: 'test-component.scss',
})
export class TestComponent {
  render() {
    return (
      <bds-grid xxs="12" padding="x-2" flex-wrap="wrap">
        <bds-grid xxs="12" margin="t-2">
          <div class="titulo">
            <bds-typo variant="fs-40" bold="bold">
              Titulo de teste fora de temas
            </bds-typo>
          </div>
        </bds-grid>
        <bds-grid xxs="6" padding="r-1">
          <bds-theme-provider theme="light">
            <bds-paper elevation="none" border>
              <bds-grid padding="2">
                <bds-datepicker
                  id="datepicker"
                  type-of-date="period"
                  start-date-limit="31/12/2022"
                  end-date-limit="01/01/2027"
                />
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
        <bds-grid xxs="6" padding="l-1">
          <bds-theme-provider theme="dark">
            <bds-paper elevation="none" border>
              <bds-grid padding="2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, ligula in semper feugiat,
                erat purus blandit nibh, non mollis dui sem in dui. Nullam tincidunt dolor sed aliquam eleifend. Sed
                vitae tincidunt metus. Sed a tempus nisi. Etiam dapibus dolor nec blandit vestibulum. Donec eget mattis
                metus. Phasellus finibus auctor purus, non sodales nulla dapibus ut. Duis elementum porta massa. Quisque
                ac finibus magna. Pellentesque ut hendrerit massa. Integer ipsum tortor, gravida vitae aliquam nec,
                sagittis scelerisque est. Pellentesque scelerisque molestie nibh posuere tincidunt. Aenean elementum
                condimentum purus, vitae hendrerit nibh congue sed. Etiam sed urna non nunc vulputate sodales. Quisque
                justo augue, pharetra vitae feugiat et, sagittis ut leo. Vivamus vestibulum id velit eget pulvinar.
                Nullam nec orci ac ligula faucibus suscipit. Donec euismod posuere nulla ac convallis. Vivamus hendrerit
                massa vel elit pulvinar placerat. Quisque interdum lorem et purus condimentum interdum. Aenean ut
                placerat turpis, vel lobortis ante. Quisque porttitor tristique lectus ac aliquet. Vestibulum a massa
                neque. Duis eu rhoncus velit. Nulla nulla ipsum, hendrerit non lectus sit amet, mattis varius mi. Donec
                fermentum enim id facilisis accumsan. Nam gravida leo tincidunt erat facilisis tincidunt. Duis eget
                mauris id sapien suscipit semper euismod eu nunc. Pellentesque eget nisi eu quam auctor sollicitudin eu
                in sem. Pellentesque tempor justo quis porttitor sollicitudin. In vulputate venenatis risus. Etiam
                sollicitudin ut metus pretium semper. Integer lacinia lacus lectus, id elementum magna gravida vel.
                Maecenas sollicitudin ac ligula ut mattis. Sed purus felis, pellentesque quis molestie eu, lacinia vel
                nisl. Sed eget imperdiet arcu, sit amet rutrum magna. In lobortis magna vel elementum sodales. Integer
                ac iaculis lacus. Donec tincidunt aliquet lacus, eget porttitor quam vulputate ac. Cras suscipit
                convallis dui, a mattis turpis vestibulum sed. Duis luctus lorem at elit finibus, id sodales elit
                interdum. Aliquam lobortis maximus velit, non sollicitudin est interdum ut. Aenean sem nulla, consequat
                nec purus sed, lacinia interdum nunc. Curabitur dui ante, bibendum eu efficitur quis, pharetra ut
                mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Sed quis auctor tellus, eu condimentum nibh. Morbi porta pulvinar purus, ac porta mi molestie in. Fusce
                vitae elementum ligula. Pellentesque scelerisque nibh ligula, in ultrices nisl tincidunt nec. Proin
                malesuada, augue id egestas tempus, est est ornare neque, a dictum magna nisl a nisl. Praesent faucibus
                luctus neque, ac suscipit ante placerat id. Proin semper tristique ante vitae condimentum. Nulla et
                felis nec dui scelerisque tristique a non arcu. Proin sapien lectus, tempus nec lectus ut, gravida
                interdum massa. Donec in dolor elementum, convallis metus ut, vulputate tortor. Maecenas rutrum lacinia
                eleifend. Etiam consequat quam eu tempus vehicula. Donec aliquam ut risus ac interdum. Curabitur aliquam
                libero nec lacus vehicula lobortis. Proin nec fringilla magna, in facilisis quam. Ut ac rutrum diam,
                quis porttitor ante. Mauris ut dui vel lorem rutrum vestibulum. Curabitur accumsan orci pretium urna
                dapibus tincidunt. Sed nisl risus, convallis id bibendum vitae, viverra a leo. Vivamus ac risus odio.
                Vestibulum pulvinar mauris ac eleifend vulputate. Duis sed tortor sed metus venenatis mollis. Nam semper
                et dui sed tempor. Sed non felis eu odio vehicula tristique. Duis ante nisi, aliquam nec massa sed,
                volutpat posuere elit. Mauris et scelerisque odio, quis finibus eros. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi scelerisque, ligula in semper feugiat, erat purus blandit nibh, non
                mollis dui sem in dui. Nullam tincidunt dolor sed aliquam eleifend. Sed vitae tincidunt metus. Sed a
                tempus nisi. Etiam dapibus dolor nec blandit vestibulum. Donec eget mattis metus. Phasellus finibus
                auctor purus, non sodales nulla dapibus ut. Duis elementum porta massa. Quisque ac finibus magna.
                Pellentesque ut hendrerit massa. Integer ipsum tortor, gravida vitae aliquam nec, sagittis scelerisque
                est. Pellentesque scelerisque molestie nibh posuere tincidunt. Aenean elementum condimentum purus, vitae
                hendrerit nibh congue sed. Etiam sed urna non nunc vulputate sodales. Quisque justo augue, pharetra
                vitae feugiat et, sagittis ut leo. Vivamus vestibulum id velit eget pulvinar. Nullam nec orci ac ligula
                faucibus suscipit. Donec euismod posuere nulla ac convallis. Vivamus hendrerit massa vel elit pulvinar
                placerat. Quisque interdum lorem et purus condimentum interdum. Aenean ut placerat turpis, vel lobortis
                ante. Quisque porttitor tristique lectus ac aliquet. Vestibulum a massa neque. Duis eu rhoncus velit.
                Nulla nulla ipsum, hendrerit non lectus sit amet, mattis varius mi. Donec fermentum enim id facilisis
                accumsan. Nam gravida leo tincidunt erat facilisis tincidunt. Duis eget mauris id sapien suscipit semper
                euismod eu nunc. Pellentesque eget nisi eu quam auctor sollicitudin eu in sem. Pellentesque tempor justo
                quis porttitor sollicitudin. In vulputate venenatis risus. Etiam sollicitudin ut metus pretium semper.
                Integer lacinia lacus lectus, id elementum magna gravida vel. Maecenas sollicitudin ac ligula ut mattis.
                Sed purus felis, pellentesque quis molestie eu, lacinia vel nisl. Sed eget imperdiet arcu, sit amet
                rutrum magna. In lobortis magna vel elementum sodales. Integer ac iaculis lacus. Donec tincidunt aliquet
                lacus, eget porttitor quam vulputate ac. Cras suscipit convallis dui, a mattis turpis vestibulum sed.
                Duis luctus lorem at elit finibus, id sodales elit interdum. Aliquam lobortis maximus velit, non
                sollicitudin est interdum ut. Aenean sem nulla, consequat nec purus sed, lacinia interdum nunc.
                Curabitur dui ante, bibendum eu efficitur quis, pharetra ut mauris. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis auctor tellus, eu condimentum
                nibh. Morbi porta pulvinar purus, ac porta mi molestie in. Fusce vitae elementum ligula. Pellentesque
                scelerisque nibh ligula, in ultrices nisl tincidunt nec. Proin malesuada, augue id egestas tempus, est
                est ornare neque, a dictum magna nisl a nisl. Praesent faucibus luctus neque, ac suscipit ante placerat
                id. Proin semper tristique ante vitae condimentum. Nulla et felis nec dui scelerisque tristique a non
                arcu. Proin sapien lectus, tempus nec lectus ut, gravida interdum massa. Donec in dolor elementum,
                convallis metus ut, vulputate tortor. Maecenas rutrum lacinia eleifend. Etiam consequat quam eu tempus
                vehicula. Donec aliquam ut risus ac interdum. Curabitur aliquam libero nec lacus vehicula lobortis.
                Proin nec fringilla magna, in facilisis quam. Ut ac rutrum diam, quis porttitor ante. Mauris ut dui vel
                lorem rutrum vestibulum. Curabitur accumsan orci pretium urna dapibus tincidunt. Sed nisl risus,
                convallis id bibendum vitae, viverra a leo. Vivamus ac risus odio. Vestibulum pulvinar mauris ac
                eleifend vulputate. Duis sed tortor sed metus venenatis mollis. Nam semper et dui sed tempor. Sed non
                felis eu odio vehicula tristique. Duis ante nisi, aliquam nec massa sed, volutpat posuere elit. Mauris
                et scelerisque odio, quis finibus eros.
              </bds-grid>
            </bds-paper>
          </bds-theme-provider>
        </bds-grid>
      </bds-grid>
    );
  }
}
