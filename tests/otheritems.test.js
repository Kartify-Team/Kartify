import React from 'react';
import { shallow, mount } from 'enzyme';
import OtherItems from '../client/components/OtherItems/index.jsx';

describe('OtherItems Component', () => {
  it('renders', () => {
    shallow(<OtherItems />);
  });

  it('renders all child components', () => {
    mount(<OtherItems />);
  });
});
