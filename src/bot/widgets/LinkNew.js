import "./LinkList.css";


const LinkNew = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <a 
        href= {link.url}
        name={link.name}
        target="_blank"
        rel="noreferrer"
        className="link-list-item-url"
      >
        {link.text}
      </a>
    </li>
  ));


  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkNew;