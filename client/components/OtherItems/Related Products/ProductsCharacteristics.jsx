import React from 'react';
import { combineProductFeatures } from '../../../utils/index.js';

const ProductsCharacteristics = ({mainProductFeatures, comparedProductFeatures}) => {
  let main = [
    {
      feature: 'buttons',
      value: 'round'
    },
    {
      feature: 'material',
      value: 'leather'
    }
  ];
  let compared = [
    {
      feature: 'material',
      value: 'duck'
    },
    {
      feature: 'buttons',
      value: 'round'
    },
    {
      feature: 'color',
      value: 'red'
    }
  ];
  let combinedFeatures = combineProductFeatures(mainProductFeatures, comparedProductFeatures);

  return (
    <div>
      <table>
        <tbody>
          {
            Object.values(combinedFeatures).map((ele) => {
              return (
                <tr key={ele.feature}>
                  <td>{(ele.mainValue === null || ele.mainValue === 'null') ? '' : ele.mainValue}</td>
                  <td>{ele.feature}</td>
                  <td>{(ele.mainValue === null || ele.comparedValue === 'null') ? '' : ele.comparedValue}</td>
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