import {useEffect, useState} from 'react'
import jwt_decode from "jwt-decode"



function Google(props) {
  const [ user, setUser] = useState({})

  function handleCallbackResponse(response){
    let userObject = jwt_decode(response.credential)
    setUser(userObject)
    props.getUserInfo((userObject))
    props.getEmail(user.email)
    document.getElementById('signInDiv').hidden = true

  }

  function handleSignOut(){
    setUser({})
    props.getUserInfo({})
    document.getElementById("signInDiv").hidden = false

  }
      useEffect(()=>{
      /* global google */
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID, 
        callback: handleCallbackResponse 
      })
  
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size: "small"}
      )
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='google'>
      <div id="signInDiv" alt={user.name}></div>
      { Object.keys(user).length !==0 &&
      <button onClick={(e)=>handleSignOut(e)}>
        Sign Out</button>
      }
      { Object.keys(user).length !==0 &&
      <div className="google--signedIn">
        <img src ={user.picture} alt={user} className="google--picture" id="google--pic"></img>
        <h3 className="google--name">{user.name}</h3>
      </div>
        }
    </div>
  )


    }
    
export default Google;
