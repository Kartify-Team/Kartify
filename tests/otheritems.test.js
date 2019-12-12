import React from 'react';
import 'regenerator-runtime'
import { shallow, mount } from 'enzyme';
import OtherItems from '../client/components/OtherItems/index.jsx';

describe('OtherItems Component', () => {
  it('renders', () => {
    shallow(<OtherItems />);
  });

  it('renders all child components', async () => {
    const props = {
      products: ['product1', 'product2', 'product3'],
      getRelatedProducts: () => {
        return;
      }
    }
    await mount(<OtherItems {...props} />);
  });
});
