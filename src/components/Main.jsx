import {useEffect, useState} from 'react'
import {Routes, Route} from "react-router-dom"
import Index from '../pages/Index'
import Edit from '../pages/Edit'



// import Activity from '../pages/Activity'
export default function Main(props) {
    const [activity, setActivity] = useState(null)
    const URL_act = "https://fs-mern-mobile.herokuapp.com/menu/"

    const[review, setReview] = useState(null)
    const URL_rev = "https://fs-mern-mobile.herokuapp.com/menu/"

    /* ---------------------------- get activity data --------------------------- */
    const getActivity = async ()=>{
        const res = await fetch (URL_act)
        const data = await res.json()
        setActivity(data)
    }

    /* ----------------------------- get review data ---------------------------- */
    const getReview = async ()=>{
        const res = await fetch (URL_rev)
        const data = await res.json()
        setReview(data)
    }

    /* ---------------------------- create new review --------------------------- */
    const createReview = async (review)=>{
        await fetch (URL_rev, {
            method: "POST",
            headers: {
                "Content-Text": "Application/json",
            },
            body: JSON.stringify(review),
        })
        getReview()
    }

    /* -------------------------- update review data -------------------------- */

    const updateReview = async (review, id)=>{
        await fetch (URL_rev + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(review),
        })
        getActivity()
    }

    /* ---------------------- delete review from database --------------------- */
    const deleteReview = async (id)=>{
        await fetch (URL_rev + id, {
            method: "DELETE",
        })
        getReview()
    }

    useEffect(()=> {getReview()},[])

    return (
        <main>
            <Routes>
                <Route path="/" element = {<Index
                activity={activity}
                review={review} ></Index>}/>


                <Route path= "/activity/:id" element = {<Edit
                activity={activity}
                updateReview={updateReview}
                deleteReview={deleteReview}
                createReview={createReview}></Edit>}/>
                
            </Routes>
        </main>
    )
  
}
