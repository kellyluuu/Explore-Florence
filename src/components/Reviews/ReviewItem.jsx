// import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

export default function ReviewItem({ item, handleDelete }) {
  return (
    <div>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        X
      </button>
      <div className="text-display">{item.text}</div>
    </div>
  );
}
ReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};
