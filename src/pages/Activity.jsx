import { useParams } from 'react-router-dom'
import ReviewCard from '../components/review/ReviewCard';
import ReviewStats from '../components/review/ReviewStats';


function Activity(props) {
  const {id} = useParams()
  const activities = props.activity
  const activity = activities.find((i)=> i._id ===id)
  const activityReview = filterCatagory(props.review, id)
  function filterCatagory (arr,query){
    return arr.filter(function(el){
        return el.activityId.toLowerCase().includes(query) 
    })
  }

    return (
      <div className="activity--grid">
        <div className="activity--details">
          <h3>{activity.name}</h3>
          <ReviewStats 
          activityReview={activityReview}
          />
          <p>{activity.desc}</p>
          <h5>
            ${activity.price} <br />
            <br /> <a href={activity.url}>More info</a>
          </h5>
        </div>
        <div className="activity--image">
          <img src={activity.imgFull} alt={activity.name} />
        </div>
        <div className="activity--reviews">
          <h5>REVIEWS</h5>
          <ReviewCard activity={activity}
          handleCallbackResponse={props.handleCallbackResponse}
          user={props.user}
          handleSignOut={props.handleSignOut}
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
