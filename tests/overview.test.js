import React from 'react';
import { shallow, mount } from 'enzyme';
import Overview from '../client/components/Overview/index.jsx';

describe('Overview Component', () => {
   it('renders', () => {
      shallow(<Overview />);
    });

    it('renders all child components', () => {
      mount(<Overview />);
    });
});