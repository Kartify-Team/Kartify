import React from 'react';
import { shallow, mount } from 'enzyme';
import Reviews from '../client/components/Reviews/index.jsx';

describe('Reviews Component', () => {
   it('renders', () => {
      shallow(<Reviews />);
    });

    it('renders all child components', () => {
      mount(<Reviews />);
    });
});