import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import ClrBadge from './badge';

describe('<ClrBadge />', () => {
   it('renders without crashing', () => {
      shallow(<ClrBadge number={1} />);
   });
});
