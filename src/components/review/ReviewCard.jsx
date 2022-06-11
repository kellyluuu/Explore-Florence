import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default function ReviewCard({review, createReview, updateReview, deleteReview}) {
    return (
      <div>
        <div className="review--formContainer">
          <ReviewForm 
                      createReview ={createReview}
                      />
        </div>
        <ReviewList review={review}
        deleteReview={deleteReview}
        updateReview={updateReview}
        />
      </div>
    );
}
