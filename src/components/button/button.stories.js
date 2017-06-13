import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { ClrButton } from 'clarity-react';

storiesOf('CtlButton', module)
   .addWithInfo('with text', () =>
      <ClrButton onClick={action('clicked')}>Hello Button</ClrButton>
   )
   .addWithInfo('solid button', () =>
      <div>
         <ClrButton className="btn-primary">Primary</ClrButton>
         <ClrButton className="btn-success">Success</ClrButton>
         <ClrButton className="btn-warning">Warning</ClrButton>
         <ClrButton className="btn-danger">Danger</ClrButton>
      </div>
   )
   .addWithInfo('otuline button', () =>
      <div>
         <ClrButton className="btn-outline">Regular</ClrButton>
         <ClrButton className="btn-success-outline">
            Success
         </ClrButton>
         <ClrButton className="btn-info-outline">Info</ClrButton>
         <ClrButton className="btn-warning-outline">
            Warning
         </ClrButton>
         <ClrButton className="btn-danger-outline">
            Danger
         </ClrButton>
         <ClrButton className="btn-outline" disabled>
            Disabled
         </ClrButton>
      </div>
   )
   .addWithInfo('flat button', () =>
      <div>
         <ClrButton className="btn-link">Regular</ClrButton>
         <ClrButton className="btn-link" disabled>Disabled</ClrButton>
         <ClrButton className="btn-sm btn-link">Regular</ClrButton>
         <ClrButton className="btn-sm btn-link" disabled>Disabled</ClrButton>
      </div>
   )
   .addWithInfo('small button', () =>
      <div>
         <ClrButton className="btn-primary btn-sm">Primary</ClrButton>
         <ClrButton className="btn-success btn-sm">Success</ClrButton>
         <ClrButton className="btn-warning btn-sm">Warning</ClrButton>
         <ClrButton className="btn-danger btn-sm">Danger</ClrButton>
      </div>
   )
   .addWithInfo('block button', () =>
      <div>
         <ClrButton className="btn-primary btn-block">Primary</ClrButton>
         <ClrButton className="btn-success btn-block">Success</ClrButton>
      </div>
   )
   .addWithInfo('inverse button', () =>
      <div style={{ background: 'black', padding: '20px' }}>
         <ClrButton className="btn-inverse">Inverse</ClrButton>
         <ClrButton className="btn-inverse" disabled>
            Invserse Disabled
         </ClrButton>
      </div>
   );
