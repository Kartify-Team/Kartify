import React from 'react';
import 'regenerator-runtime'
import { shallow, mount } from 'enzyme';
import OtherItems from '../client/components/OtherItems/index.jsx';
import Modal from '../client/components/otherItems/';

describe('OtherItems Component', () => {
  it('renders', () => {
    shallow(<OtherItems />);
  });

  // it('renders all child components', async () => {
  //   const props = {
  //     productInfo: {id: 1},
  //     products: ['product1', 'product2', 'product3'],
  //     getRelatedProducts: () => {
  //       return;
  //     },
  //     getMyOutfit: () => {
  //       return;
  //     }
  //   }
  //   await mount(<OtherItems {...props} />);
  // });
});
