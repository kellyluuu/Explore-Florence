import ReviewForm from "./ReviewForm";
import RatingSelect from "./RatingSelect"
import ReviewList from "./ReviewList";

export default function ReviewCard() {
    return (
      <div>
        <div className="review--formContainer">
          <div className="review--starRating">
            <p>Your star rating</p> <RatingSelect />
          </div>
          <ReviewForm />
        </div>
        <ReviewList />
      </div>
    );
}