

export default function ReviewStats({ review }) {
  // Calculate Ratings Average
  let average =
    review.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / review.length;
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{review.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
