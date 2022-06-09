import ReviewForm from "./ReviewForm";
import RatingSelect from "./RatingSelect"
import ReviewList from "./ReviewList";

export default function ReviewCard() {
    return (
        <div>
            <ReviewForm />
            <RatingSelect />
            <ReviewList />
        </div>
    )
}