import Update from "./Update"

export default function ReviewList(props) {


  if (!props.activityReview||props.activityReview.length ===0){
    return <p>No reviews yet</p>
  }
  return (
  <div>
      {props.editReview !== ""  && 
      <Update setReview={props.setEditReview} 
      updateReview={props.updateReview} 
      deleteReview={props.deleteReview}
      editReview={props.editReview}/>}
      <h1>review list goes here</h1>
      {props.activityReview.map(review =>(
        <div key={review._id}>
        <div>{review.rating}</div>
        {props.user.email === review.email &&
        <button name={review._id} onClick= {props.getEdit} className="close">edit
        </button>}
        <div>{review.email}</div>
        <div className="text-display">{review.text}</div>
      

          </div>
      ))}
  </div>
  )
}