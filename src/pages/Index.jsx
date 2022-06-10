import { Link } from "react-router-dom"



export default function Index(props) {
    const Loaded = ()=>{
        function filterCatagory (arr,query){
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
            <h2 className="index--title">Things to do in Florence, Italy</h2>
      <div className="index--grid">
        {filterCatagory(props.activity, props.filter).map((activity)=>(
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
