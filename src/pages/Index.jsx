import { Link } from "react-router-dom"
import { useState } from "react"

export default function Index(props) {
    const Loaded = () => {
        const [formState, setFormState] = useState('');

        function handleSelect(event) {
            setFormState(event.target.value)
        }
        
        function filterCategory (arr, query){
            return arr.filter(function(el){
                if (query !== ""){
                    return el.type.toLowerCase().includes(query) 
                }else{
                    return el.type.toLowerCase() !== query
                }
            })
        }
        
        const [filterArr, setFilterArr] = useState([...props.activity])
        
        const handleSubmit = (event) => {
            event.preventDefault()
            // const newFilter = filterCategory(props.activity, formState)
            setFilterArr(filterArr)
        }

        return (
          <>
            <h2 className="index--title">New experiences await in Florence</h2>
            <div className="index--filter">
              <form onSubmit={handleSubmit}>
                <select className="index--selection" value={formState} onChange={handleSelect}>
                  <option value="">ALL ACTIVITIES</option>
                  <option value="eat">EAT</option>
                  <option value="drink">DRINK</option>
                  <option value="tour">TOUR</option>
                  <option value="play">PLAY</option>
                  <option value="shop">SHOP</option>
                  <option value="relax">RELAX</option>
                </select>
                <button type="submit">SEARCH</button>
              </form>
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
        <h1>Loading....</h1>
    )
}
  return props.activity ? Loaded() : loading()
}
