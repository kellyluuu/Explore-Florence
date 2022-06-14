import { useParams } from 'react-router-dom'
import ReviewCard from '../components/review/ReviewCard';
import ReviewStats from '../components/review/ReviewStats';
import { Link } from "react-router-dom";


function Activity(props) {
  const {id} = useParams()
  const activities = props.activity
  const activity = activities.find((i)=> i._id ===id)
  const activityReview = filterActivity(props.review, id)
  function filterActivity(arr, query) {
    return arr.filter(function(el){
        return el.activityId.toLowerCase().includes(query) 
    })
  }

    return (
      <div className="activity--grid">
        <div className="activity--image">
          <img src={activity.imgFull} alt={activity.name} />
        </div>
        <div className="activity--details">
          <h3>{activity.name}</h3>
          <ReviewStats activityReview={activityReview} />
          <p>{activity.desc}</p>
          <h5>
            ${activity.price} <br />
            <br /> <a href={activity.url}>More info</a>
          </h5>
          <Link to="/activity">
            <h5>Back to activities</h5>
          </Link>
        </div>
        <div className="activity--reviews">
          <h5>REVIEWS</h5>
          <ReviewCard
            user={props.user}
            getUserInfo={props.getUserInfo}
            activityReview={activityReview}
            createReview={props.createReview}
            updateReview={props.updateReview}
            deleteReview={props.deleteReview}
          />
        </div>
      </div>
    );
}


export default Activity
