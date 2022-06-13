import Update from "./Update"

export default function ReviewList(props) {


  if (!props.activityReview||props.activityReview.length ===0){
    return <p>No reviews yet</p>
  }
  return (
    <div>
      {props.editReview !== "" && (
        <Update
          setReview={props.setEditReview}
          updateReview={props.updateReview}
          deleteReview={props.deleteReview}
          editReview={props.editReview}
        />
      )}
      {props.activityReview.map((review) => (
        <div key={review._id}>
          <span className="icon">★ {review.rating}</span>
          {props.user.email === review.email && (
            <button name={review._id} onClick={props.getEdit} className="close">
              edit
            </button>
          )}
          <div>{review.email}</div>
          <div className="text-display">{review.text}</div>
        </div>
      ))}
    </div>
  );
}