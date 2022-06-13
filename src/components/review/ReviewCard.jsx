import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default function ReviewCard({user, getUserInfo, activityReview, createReview, updateReview, deleteReview}) {
    return (
      <div>
        <div className="review--formContainer">
          <ReviewForm 
                      createReview ={createReview}
                      user={user}
                      getUserInfo={getUserInfo}
                      />
        </div>
        <ReviewList activityReview={activityReview}
        user={user}
        deleteReview={deleteReview}
        updateReview={updateReview}
        />
      </div>
    );
}