import { Link } from "react-router-dom"


export default function Index(props) {
    const Loaded = () => {
        function filterCategory (arr, query){
            return arr.filter(function(el){
                if (query !== ""){
                    return el.type.toLowerCase().includes(query) 
                }else{
                    return el.type.toLowerCase() !== query
                }
            })
        }
        
        return (
          <>
            <div className="index--header">
              <h2 className="index--title">
                New experiences await in Florence
              </h2>
              <div className="index--filter">
                <form>
                  <select
                    className="index--selection"
                    value={props.filter}
                    onChange={props.getFilter}
                  >
                    <option value="">ALL ACTIVITIES</option>
                    <option value="eat">EAT</option>
                    <option value="drink">DRINK</option>
                    <option value="tour">TOUR</option>
                    <option value="play">PLAY</option>
                    <option value="shop">SHOP</option>
                    <option value="relax">RELAX</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="index--grid">
              {filterCategory(props.activity, props.filter).map((activity) => (
                <div className="index--itemBox" key={activity._id}>
                  <Link to={`/activity/${activity._id}`}>
                    <div className="index--overlay">
                      <p className="index--overlayText">{activity.name}</p>
                    </div>
                    <img
                      src={activity.imgThumb}
                      alt={activity.name}
                      className="index--image"
                    ></img>
                  </Link>
                </div>
              ))}
            </div>
          </>
        );}

  const loading = ()=>{
    return ( 
        <h1 className="loading">Loading....</h1>
    )
}
  return props.activity ? Loaded() : loading()
}
