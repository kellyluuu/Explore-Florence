import {Routes, Route} from "react-router-dom"
import {useEffect, useState} from 'react'
import Index from "../pages/Index"
import Splash from "../pages/Splash"
import Activity from "../pages/Activity"


function Main() {
    const URL_act = "https://project-travel-site.herokuapp.com/activity/"
    const [activity, setActivity] = useState(null)

    const URL_rev = "https://project-travel-site.herokuapp.com/activity/"
    const [review, setReview] = useState(null)

    /* ---------------------------- GET ACTIVIY DATA ---------------------------- */
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
            <Route path ="/" element = {<Splash></Splash>}/>

            <Route path = "/activity" element = {<Index
            activity={activity}></Index>}/>

            <Route path ="/activity/:id" element = {<Activity
            activity={activity}
            review={review}
            createReview ={createReview}
            updateReview={updateReview}
            deleteReview={deleteReview}
            ></Activity>}/>


        </Routes>
    </main>
  )
}

export default Main