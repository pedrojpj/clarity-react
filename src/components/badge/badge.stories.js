import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { ClrBadge } from 'clarity-react';

storiesOf('ClrBadge', module)
   .addWithInfo('default with number', () => <ClrBadge number={1} />)
   .addWithInfo('color options', () =>
      <div>
         <ClrBadge className="badge-purple" number={15} />
         <ClrBadge className="badge-blue" number={2} />
         <ClrBadge className="badge-orange" number={20} />
         <ClrBadge className="badge-light-blue" number={12} />
         <ClrBadge className="badge-1" number={90} />
         <ClrBadge className="badge-2" number={122} />
         <ClrBadge className="badge-3" number={25} />
         <ClrBadge className="badge-4" number={32} />
         <ClrBadge className="badge-5" number={57} />
      </div>
   )
   .addWithInfo('status badges', () =>
      <div>
         <ClrBadge className="badge-info" number={15} />
         <ClrBadge className="badge-success" number={2} />
         <ClrBadge className="badge-warning" number={20} />
         <ClrBadge className="badge-danger" number={12} />
      </div>
   );
