import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default function ReviewCard({user, handleCallbackResponse, handleSignOut, activityReview, createReview, updateReview, deleteReview}) {
    return (
      <div>
        <div className="review--formContainer">
          <ReviewForm 
                      createReview ={createReview}
                      user={user}
                      handleCallbackResponse={handleCallbackResponse}
                      handleSignOut={handleSignOut}
                      />
        </div>
        <ReviewList activityReview={activityReview}
        deleteReview={deleteReview}
        updateReview={updateReview}
        />
      </div>
    );
}
