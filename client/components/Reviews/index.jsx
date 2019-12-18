import React, { useEffect } from 'react';
import ReviewList from './ReviewList';
import RatingBreakdown from './RatingBreakdown';
import { useParams } from 'react-router-dom';

const Reviews = ({
  product,
  characteristics,
  setCharacteristics,
  reviews,
  reviewList,
  setReviewList,
  totalRatings,
  setTotalRatings
}) => {
  if (product && reviews && reviews.ratings) {
    const id = useParams().id;
    useEffect(() => {
      setCharacteristics(id);
      setTotalRatings(reviews.ratings);
    }, []);
  }

  if (
    product === null ||
    product === undefined ||
    reviews === null ||
    reviews === undefined ||
    reviews.ratings === undefined ||
    reviews.ratings === null ||
    reviews.reviewList === null ||
    reviews.reviewList === undefined ||
    !characteristics
  ) {
    return null;
  } else {
    return (
      <div className="component">
        <h3>Ratings & Reviews</h3>
        <div id="reviews-container">
          <RatingBreakdown
            product={product}
            ratings={reviews.ratings}
            characteristics={characteristics}
            totalRatings={totalRatings}
          />
          <ReviewList
            reviews={reviewList}
            setReviewList={setReviewList}
            product={product}
          />
        </div>
      </div>
    );
  }
};

export default Reviews;
