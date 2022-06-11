import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default function ReviewCard() {
    return (
      <div>
        <div className="review--formContainer">
          <ReviewForm />
        </div>
        <ReviewList className="review--list" />
      </div>
    );
}