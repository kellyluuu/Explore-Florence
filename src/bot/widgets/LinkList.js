import "./LinkList.css";
import { Link } from "react-router-dom";

const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <Link 
        to={link.url}
        onClick={props.getFilter}
        name={link.name}
        className="link-list-item-url"
      >
        {link.text}
      </Link>
    </li>
  ));


  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;