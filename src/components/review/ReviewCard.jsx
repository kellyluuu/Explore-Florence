import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import {useState} from 'react'

export default function ReviewCard({user, getReview, getUserInfo, activityReview, createReview, updateReview, deleteReview}) {
  const [editReview, setEditReview] = useState("")
  const getEdit = (event)=>{
    const reviews = activityReview
    const review = reviews.find((i)=>i._id===event.target.name)
    setEditReview(review)
  }

  return (
      <div>
        <div className="review--formContainer">

          <ReviewForm 
                      createReview ={createReview}
                      editReview={editReview}
                      getReview={getReview}
                      user={user}
                      getUserInfo={getUserInfo}
                      />
        </div>

        <ReviewList 
        activityReview={activityReview}
        editReview={editReview}
        getEdit={getEdit}
        setEditReview={setEditReview}
        user={user}
        deleteReview={deleteReview}
        updateReview={updateReview}
        />
      </div>
    );
}
