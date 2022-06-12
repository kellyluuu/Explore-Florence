import PropTypes from 'prop-types';
import RatingSelect from './RatingSelect';
import { useState } from 'react';

export default function ReviewList(props) {

  if (!props.activityReview||props.activityReview.length ===0){
    return <p>No reviews yet</p>
  }

  return (
    <div className="review--list">
      {props.activityReview.map((review) => (
        <div className="review--single-review">
          <div key={review.id}>
            <div>
              <RatingSelect
                value={review.rating}
                name="stars"
                readOnly="true"
                checked={review.rating}
              />
            </div>
            <div className="review--text">{review.text}</div>
            <div id="review--update-delete">
              <button
                onClick={() => props.updateReview(review.id)}
                className="review--update"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteReview(review.id)}
                className="review--delete"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ReviewList.propTypes = {
  review: PropTypes.arrayOf(
  PropTypes.shape({
  email: PropTypes.string,
  id: PropTypes.string,
  activityId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
   })
  )
};