import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./Button";
import Google from "../../Google";
import { useParams } from 'react-router-dom'

// createReview is passed down from Main.JSX

export default function ReviewForm({ createReview }) {
  const {id} = useParams()
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [activityId, setActivityId] = useState(id)


  const handleChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 1) {
      setMessage("Text must be at least 4 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setActivityId(id)
      setBtnDisabled(false);
    }
    setText(event.target.value);
  };

//   const handleChange = (event) => {
//     setReview((prevState) => ({
//       ...prevState,
//       [event.target.name]: event.target.value,
//     }));
//   };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (text.trim().length > 3) {
        const newReview = {
        text,
        rating
      
        }
        createReview(newReview);
        setText("")
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div>
          <input type="hidden" value = {activityId}/>
          <textarea
            onChange={handleChange}
            type="text"
            placeholder="Write a review..."
            value={text}
            className="review--input-box"
            rows="6"
            cols="60"
          />
          <div className="review--button">
            <div>
              <Google isDisabled={btnDisabled} />
            </div>
            <div>
              <Button type="submit" isDisabled={btnDisabled}>
                ADD REVIEW
              </Button>
            </div>
          </div>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
}
