import React, { useEffect } from 'react';
import ReviewList from './ReviewList';
import RatingBreakdown from './RatingBreakdown';

const Reviews = ({ product, characteristics, setCharacteristics }) => {
  if (product) {
    useEffect(() => {
      setCharacteristics(product.id);
    }, []);
  }

  if (!product) {
    return null;
  } else {
    return (
      <>
        <h3>Ratings & Reviews</h3>
        <div id="reviews-container">
          <RatingBreakdown productId={product.id} />
          <ReviewList />
        </div>
      </>
    );
  }
};

export default Reviews;
