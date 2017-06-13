import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';

import '../src/index.scss';

storiesOf('Welcome', module).add('to Storybook', () =>
   <Welcome showApp={linkTo('Button')} />
);
