import Update from "./Update"
import {useState} from "react"

export default function ReviewList(props) {
  const [editReview, setEditReview] = useState("")
  const getEdit = (event)=>{
    const reviews = props.activityReview
    const review = reviews.find((i)=>i._id===event.target.name)
    setEditReview(review)
    console.log(review)
  }

  

  if (!props.activityReview||props.activityReview.length ===0){
    return <p>No reviews yet</p>
  }
  return (
  <div>
      {editReview !== ""  && 
      <Update setReview={setEditReview} 
      updateReview={props.updateReview} 
      deleteReview={props.deleteReview}
      editReview={editReview}/>}
      <h1>review list goes here</h1>
      {props.activityReview.map(review =>(
        <div key={review._id}>
        <div>{review.rating}</div>

        {/* <button name={review._id} onClick={() => props.deleteReview(review._id)} className="close">
        </button> */}

        <button name={review._id} onClick= {getEdit} className="close">edit
        </button>
        <div>{review.email}</div>
        <div className="text-display">{review.text}</div>
      

          </div>
      ))}
  </div>
  )
}