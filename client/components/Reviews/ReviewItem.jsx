import React, { useState } from 'react';
import Stars from './Stars';
import { formatDate } from '../../utils';
import {
  incrementHelpfulness,
  reportReview
} from '../../greenfieldAPI/reviews';
import { ReportedReview } from './ReportedReview';
import ThumbnailGallery from '../Questions/ThumbnailGallery';

const ReviewItem = ({
  review,
  updateReviews,
  setReviewsChanged,
  reviewsChanged,
  setHelpfulReviews,
  helpfulReviews
}) => {
  const {
    body,
    date,
    helpfulness,
    rating,
    summary,
    reviewer_name,
    review_id,
    photos,
    recommend
  } = review;

  const [isReported, setIsReported] = useState(false);
  const displayDate = formatDate(date);
  const photoURLs = photos.map(photo => photo.url);

  const handleHelpful = reviewId => {
    if (helpfulReviews.includes(reviewId)) return;

    setHelpfulReviews([...helpfulReviews, reviewId]);

    incrementHelpfulness(reviewId)
      .then(() => updateReviews())
      .then(() => setReviewsChanged(!reviewsChanged));
  };

  const handleReport = reviewId => {
    reportReview(reviewId).then(() => {
      setIsReported(true);
    });
  };

  if (isReported) {
    return <ReportedReview />;
  } else {
    return (
      <div className="review_item">
        <Stars stars={rating} />
        <p>{reviewer_name}</p>
        <p className="summary">{summary}</p>
        <ThumbnailGallery imageURLs={photoURLs} />
        <p>{body}</p>
        {recommend === 1 ? (
          <p>
            <i class="fa fa-check"></i> I recommend this product
          </p>
        ) : null}
        <p>{displayDate.toLocaleString('en-US')}</p>
        Helpful?{' '}
        <p onClick={() => handleHelpful(review_id)}>
          <span
            className={
              helpfulReviews.includes(review_id) ? '' : 'underline-clickable'
            }
          >
            Yes
          </span>{' '}
          ({helpfulness})
        </p>
        <p
          className="underline-clickable"
          onClick={() => handleReport(review_id)}
        >
          Report
        </p>
      </div>
    );
  }
};

export default ReviewItem;
