import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import CtlButton from './button';

describe('<CtlButton />', () => {
   it('renders without crashing', () => {
      shallow(<CtlButton />);
   });
});
