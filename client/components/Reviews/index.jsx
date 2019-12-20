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
  setTotalRatings,
  filters,
  toggleFilter,
  totalReviews,
  setTotalReviews
}) => {
  if (product && reviews && reviews.ratings) {
    const id = product.id || useParams().id;
    useEffect(() => {
      setCharacteristics(id);
      setTotalRatings(reviews.ratings);
    }, []);
  }

  if (
    !product ||
    !reviews ||
    !reviews.ratings ||
    !reviews.reviewList ||
    !characteristics
  ) {
    return null;
  } else {
    return (
      <div className="component padding-ten">
        <h3 className="section-title">Ratings & Reviews</h3>
        <div id="reviews-container">
          <RatingBreakdown
            product={product}
            ratings={reviews.ratings}
            characteristics={characteristics}
            totalRatings={totalRatings}
            toggleFilter={toggleFilter}
            totalReviews={totalReviews}
          />
          <ReviewList
            reviews={reviewList}
            setReviewList={setReviewList}
            product={product}
            filters={filters}
            toggleFilter={toggleFilter}
            setTotalReviews={setTotalReviews}
          />
        </div>
      </div>
    );
  }
};

export default Reviews;
