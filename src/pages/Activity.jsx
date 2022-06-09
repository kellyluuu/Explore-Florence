import { useParams, useNavigate } from 'react-router-dom'
import {useState} from "react"
import Google from "../Google";
import ReviewCard from '../components/ReviewCard';


function Activity(props) {
  const {id} = useParams()
  const activities = props.activity
  const activity = activities.find((i)=> i._id ===id)
  let navigate = useNavigate()
  

  // const [editReview, setEditReview] = useState(post)
  
  // const handleChange = (event)=>{
  //   setEditReview((prevState)=>({
  //     ...prevState,
  //     [event.target.name]: event.target.value
  //   }))
  // }
  
  // const handleSubmit = (event)=>{
  //   event.preventDefault ()
  //   props.updateReview(editReview, post._id)
  //   navigate("/")
  // }
  
  // const removeReview = ()=>{
  //   props.deleteReview(post._id)
  //   navigate("/")
  // }
    return (
      <div className="activity--grid">
        <div className="activity--details">
          <h3>{activity.name}</h3>
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
          <ReviewCard />
        </div>
      </div>
    );
}


export default Activity