
import { Link } from "react-router-dom"


export default function Index(props) {
  const Loaded = ()=>{
    return(
      <div>
        {props.activity.map((activity)=>(
          <div  key={activity._id} >
          <Link to ={`/activity/${activity._id}`}>
          <h3>{activity.name}</h3>
          </Link>
      </div>
    ))}
    </div>
  )}

  const loading = ()=>{
    return (
      <div>
          <a href="/activity/sampleshow">
    <div className="activityIndex">
        <h1>Activity Index Page</h1>
    </div></a>

      </div>
    )
}
  return props.activity ? Loaded() : loading()
}
