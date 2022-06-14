import {Routes, Route} from "react-router-dom"
import {useEffect, useState} from 'react'
import Index from "../pages/Index"
import Splash from "../pages/Splash"
import Activity from "../pages/Activity"
import Nav from "./Nav"



function Main() {
    const URL_act = "https://project-travel-site.herokuapp.com/activity/"
    const [activity, setActivity] = useState(null)

    const URL_rev = "https://project-travel-site.herokuapp.com/reviews/"
    const [review, setReview] = useState(null)

    /* ----------------------------- FILTER FUNCTION ---------------------------- */
    const [filter, setFilter]= useState("")
    const getFilter = (event)=>{
        const newFilter = event.target.value
        setFilter(newFilter)
    }

    const getLinkFilter = (event)=>{
        const newFilter = event.target.name
        setFilter(newFilter)
    }

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
    const createReview = async (review) =>{
        await fetch (URL_rev, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
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
        if (window.confirm('Are you sure you want to delete?'))
        await fetch (URL_rev + id, {
            method: "DELETE",
        })
        getReview()
    }
    
    /* ------------------------------ google login ------------------------------ */
    const [ userInfo, setUserInfo] = useState({})
    const getUserInfo  = (x)=>{
        const newUserInfo = x
        setUserInfo(newUserInfo) 
        
    }

    /* ---------------------------- update toggle div --------------------------- */


    useEffect(()=> {getActivity()},[])
    useEffect(()=> {getReview()},[])


  return (
    <main>
        <Nav getFilter={getLinkFilter}/>
        <Routes>
            <Route path ="/" element = {<Splash></Splash>}/>

            <Route path = "/activity" element = {<Index
            filter={filter}
            getFilter={getFilter}
            activity={activity}></Index>}/>
            <Route path ="/activity/:id" element = {<Activity
            activity={activity}
            review={review}
            user={userInfo}
            getUserInfo={getUserInfo}
            createReview ={createReview}
            updateReview={updateReview}
            deleteReview={deleteReview}
            ></Activity>}/>
        </Routes>
 
    </main>
  )
}

export default Main