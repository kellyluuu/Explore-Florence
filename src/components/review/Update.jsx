import Button from './Button'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import RatingSelect from "./RatingSelect";

export default function Update({deleteReview, updateReview, editReview, setReview}) {
  let navigate = useNavigate()
  const [rating, setRating] = useState(editReview.rating);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [newForm, setNewForm] = useState({
    activityId: editReview.activityId,
    text: editReview.text,
    email: editReview.email,
    rating: editReview.rating,
  })

const getRating = (x)=>{
  setNewForm({...newForm, rating: x})
  console.log(rating)
}


  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
    if (newForm.text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (newForm.text !== "" && newForm.text.trim().length < 3) {
      setMessage("Text must be at least 4 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    };
  }
  const handleSubmit =  (event)=>{
    event.preventDefault()
    updateReview(newForm, editReview._id)
    navigate(`/activity/${editReview.activityId}`)
    setReview("")
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <RatingSelect getRating={getRating} select={(rating) => setRating(rating)} />
        <div>
          <textarea
            onChange={handleChange} 
            type="text"
            name="text"
            placeholder="Write a review..."
            value={newForm.text}
            className="review--input-box"
            rows="6"
            cols="60"
          />
          <div className="review--button">
        
            <div>
            
              <Button type="submit" isDisabled={btnDisabled}>
                UPDATE REVIEW
              </Button>
              <button name={editReview._id} onClick={() => deleteReview(editReview._id)} className="close">
              delete</button>
          
            </div>
          </div>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  )
}
