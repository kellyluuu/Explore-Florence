import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./Button";
import Google from "../Google";

export default function ReviewForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(4);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 8) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 3) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
      setText("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div>
          <textarea
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review..."
            value={text}
            className="review--input-box"
            rows="6"
            cols="60"
          />
          <div className="review--button">
            <div>
              <Google />
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
