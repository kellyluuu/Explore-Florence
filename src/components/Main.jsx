import {useEffect, useState} from 'react'
import {Routes, Route} from "react-router-dom"
import Index from '../pages/Index'
import ActivityShow from '../pages/ActivityShow'
import Splash from '../pages/Splash'



// import Activity from '../pages/Activity'
export default function Main(props) {
    const [activity, setActivity] = useState(null)
    const URL_act = "PENDING"

    const[review, setReview] = useState(null)
    const URL_rev = "PENDING"

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
        getReview()
    }

    /* ---------------------- delete review from database --------------------- */
    const deleteReview = async (id)=>{
        await fetch (URL_rev + id, {
            method: "DELETE",
        })
        getReview()
    }

    useEffect(()=> {getActivity()},[])
    useEffect(()=> {getReview()},[])

    return (
        <main>
            <Routes>
                <Route path="/" element = {<Splash></Splash>}/>

                <Route path="/activity" element = {<Index
                activity={activity}
                review={review} ></Index>}/>


                <Route path= "/activity/:id" element = {<ActivityShow
                activity={activity}
                review={review}
                updateReview={updateReview}
                deleteReview={deleteReview}
                createReview={createReview}></ActivityShow>}/>
                
            </Routes>
        </main>
    )
  
}
