import React from 'react';
import { combineProductFeatures } from '../../../utils/index.js';

const ProductsCharacteristics = ({ mainProduct, comparedProduct }) => {
  let combinedFeatures = combineProductFeatures(mainProduct.features, comparedProduct.features);

  const getFeature = (value) => {
    if (value === null) {
      return '';
    } else if (value === 'null') {
      return '✓';
    } else {
      return value;
    }
  };

  return (
    <div className='features-table-container'>
      <table className='features-table'>
        <tbody>
          <tr className='features-table-headers'>
            <th>{mainProduct.name}</th>
            <th></th>
            <th>{comparedProduct.name}</th>
          </tr>
          {
            Object.values(combinedFeatures).map((ele) => {
              return (
                <tr key={ele.feature} className='features-table-row'>
                  <td className='features-table-left-column'>{getFeature(ele.mainValue)}</td>
                  <td className='features-table-center-column'>{ele.feature}</td>
                  <td className='features-table-right-column'>{getFeature(ele.comparedValue)}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProductsCharacteristics;