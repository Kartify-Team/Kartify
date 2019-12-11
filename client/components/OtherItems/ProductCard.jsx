import React from 'react';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='productCard'>
        <div className='productCardImage'>
          {/* <img src='' /> */}
        </div>
        <div className='productCardDescription'>
          <div className='ProductCardInfo'>
          </div>
          <div className='ProductCardPrice'>
          </div>
          <div className='ProductCardRating'>
          </div>
        </div>
      </div>
    )
  }
}