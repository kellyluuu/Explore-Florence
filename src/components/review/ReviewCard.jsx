import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default function ReviewCard({user, getUserInfo, activityReview, createReview, updateReview, deleteReview}) {
    return (
      <div>
        <div className="review--formContainer">
// <<<<<<< dev-misc-cw
//           <ReviewForm createReview={createReview} />
//         </div>
//         <div className="review--list">
//           <ReviewList
//             activityReview={activityReview}
//             deleteReview={deleteReview}
//             updateReview={updateReview}
//           />
// =======
          <ReviewForm 
                      createReview ={createReview}
                      user={user}
                      getUserInfo={getUserInfo}
                      />
        </div>
<<<<<<< HEAD
=======
        <ReviewList activityReview={activityReview}
        user={user}
        deleteReview={deleteReview}
        updateReview={updateReview}
        />
>>>>>>> integration
      </div>
    );
}
