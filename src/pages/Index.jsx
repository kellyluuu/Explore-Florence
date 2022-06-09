import { Link } from "react-router-dom"
import {useState} from "react"


export default function Index(props) {
    const Loaded = ()=>{
        const [formState, setFormState] = useState ({search: "",})
        const handleChange = (event)=>{
            const newState = {...formState}
            newState[event.target.name] = event.target.value
            setFormState(newState)
        }

        function filterCatagory (arr,query){
            return arr.filter(function(el){
                if (query !== ""){
                    return el.name.toLowerCase() === query 
                }else{
                    return el.name.toLowerCase() !== query
                }
            })
        }
        const [filterArr, setFilterArr] = useState([...props.activity])
        const handleSubmit = (event)=>{
            event.preventDefault()
            const newFilter = filterCatagory(props.activity, formState.search)
            setFilterArr(newFilter)
        }
    
        return (
            <>
            <h1>Things to do in Florence, Italy</h1>
            <div className="filter">
            <form onSubmit={handleSubmit}>
            <input type="text" name="search" onChange={handleChange} value={formState.search}/>
            </form>
        </div>
      <div className="index--grid">
        {filterArr.map((activity)=>(
          <div className="index--itemBox" key={activity._id} >
            <Link to ={`/activity/${activity._id}`}>
            <div className="index--overlay"><p className="index--overlayText">{activity.name}</p></div>
            <img src={activity.imgThumb} alt={activity.name} className="index--image"></img>
          </Link>
      </div>
    ))}
    </div>
    </>
  )}

  const loading = ()=>{
    return ( 
        <h1>Loading....</h1>
    )
}
  return props.activity ? Loaded() : loading()
}
