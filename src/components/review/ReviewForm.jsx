import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./Button";
import Google from "../../Google";
import { useParams } from 'react-router-dom'



export default function ReviewForm({ editReview, getReview, getUserInfo, user, createReview }) {
  const {id} = useParams()
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [newForm, setNewForm] = useState({
    email: user.email,
    activityId: id,
    text: "",
    rating: "",
  })

const getRating = (x)=>{
  setNewForm({...newForm, rating: x})
  console.log(rating)
}

const getEmail = (x)=>{
  setNewForm({...newForm, email: x})
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

  const handleSubmit = (event)=>{
    event.preventDefault()
    createReview(newForm)
    setNewForm({
      email: user.email,
      activityId: id,
      text: "",
      rating: "",
    })
  }



  return (
    <div>
      { editReview === "" &&
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
              <Google getEmail={getEmail} id={id} getReview={getReview} getUserInfo={getUserInfo} user={user} isDisabled={btnDisabled} />
            </div>
            <div>
            { Object.keys(user).length !==0 &&
              <Button type="submit" isDisabled={btnDisabled}>
                ADD REVIEW
              </Button>
            }
            </div>
          </div>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    }
    </div>
  )
}
