import Update from "./Update"

export default function ReviewList(props) {


  if (!props.activityReview||props.activityReview.length ===0){
    return <p>No reviews yet</p>
  }
  return (
    <div>
      {props.activityReview.map((review) => (
        <div key={review._id} className="review--single-review">
          {props.editReview._id === review._id && (
            <Update
              setReview={props.setEditReview}
              updateReview={props.updateReview}
              deleteReview={props.deleteReview}
              editReview={props.editReview}
              id="update"
            />
          )}
          <div key={review._id}>
            <div className="review--rating-email">
              <div>Reviewed by {review.email}</div>
              <span>★ {review.rating}</span>
            </div>
            <div className="review--text">{review.text}</div>
            {props.user.email === review.email && (
              <button name={review._id} onClick={props.getEdit}>
                edit
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}