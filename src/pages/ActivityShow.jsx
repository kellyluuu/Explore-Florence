// import { useParams, useNavigate } from 'react-router-dom'
// import {useState} from "react"

export default function ActivityShow(props) {
  return (
    <div>
    <a href="/">
<div className="activityShow">
  <h1>Activity Show Page</h1>
</div></a>

</div>
  )
}


// export default function Edit(props) {
//   const {id} = useParams()
//   const review = props.review
//   const post = review.find((i)=> i._id ===id)
//   let navigate = useNavigate()
  
//   // State for review 
//   const [editReview, setEditReview] = useState(post)
  
//   const handleChange = (event)=>{
//     setEditReview((prevState)=>({
//       ...prevState,
//       [event.target.name]: event.target.value
//     }))
//   }
  
//   const handleSubmit = (event)=>{
//     event.preventDefault ()
//     props.updateReview(editReview, post._id)
//     navigate("/")
//   }
  
//   const removeReview = ()=>{
//     props.deleteReview(post._id)
//     navigate("/")
//   }
//     return (
//       <div>
//         <h1>{post.name}</h1>
//         <button onClick={removeReview}>delete review</button>
//         <form onSubmit={handleSubmit}>
//           <input
//           type="text"
//           value={editReview.name}
//           name="name"
//           placeholder="name"
//           onChange={handleChange}
//           required
//           />
//           <input
//           type ="number"
//           step = "1"
//           min = "1"
//           max = "5"
//           name="price"
//           value = {editReview.price}
//           />
//           <input type="submit" value ="update review"/>
//         </form>
//       </div>
//     )
//   }
  