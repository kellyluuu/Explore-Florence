import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Google from "../../Google";
import { useParams } from 'react-router-dom'



export default function ReviewForm({ editReview, getUserInfo, user, createReview }) {
  const {id} = useParams()
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    email: user.email,
    activityId: id,
    text: "",
    rating: "",
  })

const getRating = (x)=>{
  setForm({...form, rating: x})
  console.log(rating)
}

const getEmail = (x)=>{
  setForm({...form, email: x})
}



  const handleChange = (event) => {
    getEmail(user.email)
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
    if (form.text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (form.text !== "" && form.text.trim().length < 1) {
      setMessage(null);
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    };
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    createReview(form)
    setForm({
      email: user.email,
      activityId: id,
      text: "",
      rating: "",
    })
  }



  return (
    <div>
      {editReview === "" && (
        <form onSubmit={handleSubmit} className="review--formContainer">
          <RatingSelect
            getRating={getRating}
            select={(rating) => setRating(rating)}
          />
          <div>
            <textarea
              onChange={handleChange}
              type="text"
              name="text"
              placeholder="Write a review..."
              value={form.text}
              className="review--input-box"
              rows="6"
              cols="60"
            />
            <div className="review--button">
              <div>
                <Google
                  getEmail={getEmail}
                  id={id}
                  getUserInfo={getUserInfo}
                  user={user}
                />
              </div>
              <div>
                {Object.keys(user).length !== 0 && (
                  <button disabled={btnDisabled} type="submit">
                    Add Review
                  </button>
                )}
              </div>
            </div>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      )}
    </div>
  );
}
