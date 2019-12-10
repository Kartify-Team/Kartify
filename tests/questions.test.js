import React from 'react';
import { shallow, mount } from 'enzyme';
import Questions from '../client/components/Questions/index.jsx';

describe('Questions Component', () => {
   it('renders', () => {
      shallow(<Questions />);
    });

    it('renders all child components', () => {
      mount(<Questions />);
    });
});