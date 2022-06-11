import {Routes, Route} from "react-router-dom"
import {useEffect, useState} from 'react'
import Index from "../pages/Index"
import Splash from "../pages/Splash"
import Activity from "../pages/Activity"
import Nav from "./Nav"
import jwt_decode from "jwt-decode"


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
        console.log(filter)
    }

    const getLinkFilter = (event)=>{
        const newFilter = event.target.name
        setFilter(newFilter)
        console.log(filter)
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
        //getReview()
    }
    
    /* ------------------------------ google login ------------------------------ */
    const [ user, setUser] = useState({})


    function handleCallbackResponse(response){
      console.log("Encoded JWT ID token: " + response.credential)
      let userObject = jwt_decode(response.credential)
      console.log(userObject)
      setUser(userObject)
      document.getElementById('signInDiv').hidden = true
      // document.getElementById('google--signedIn').hidden = true
    }
  
    function handleSignOut(event){
      setUser({})
      document.getElementById("signInDiv").hidden = false
      // document.getElementById("google--signedIn").hidden = false;
    }
  
    // useEffect(()=>{
    //   /* global google */
    //   google.accounts.id.initialize({
    //     client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    //     callback: handleCallbackResponse
    //   })
  
    //   google.accounts.id.renderButton(
    //     document.getElementById("signInDiv"),
    //     {theme: "outline", size: "small"}
    //   )
    //   google.accounts.id.prompt()
    // },[])




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
            user={user}
            handleCallbackResponse={handleCallbackResponse}
            handleSignOut={handleSignOut}
            createReview ={createReview}
            updateReview={updateReview}
            deleteReview={deleteReview}
            ></Activity>}/>
        </Routes>
    </main>
  )
}

export default Main