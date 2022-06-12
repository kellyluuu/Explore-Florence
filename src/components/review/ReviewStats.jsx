

export default function ReviewStats({ activityReview }) {
  // Calculate Ratings Average
  let average =
    activityReview.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / activityReview.length;
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4 className="feedback-1">{activityReview.length} Reviews |</h4>
      <h4> Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
