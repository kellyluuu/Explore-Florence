import {useState, useEffect} from 'react'
import jwt_decode from "jwt-decode"





function Google() {
  const [ user, setUser] = useState({})


  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential)
    let userObject = jwt_decode(response.credential)
    console.log(userObject)
    setUser(userObject)
    document.getElementById('signInDiv').hidden = true
  }

  function handleSignOut(event){
    setUser({})
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
    google.accounts.id.prompt()
  },[])
// IF NO USER SHOW SIGN IN BUTTON 
// IF WE HAVE USER : SHOW THE LOG OUT BUTTON 

  return (
    <div className='App'>
      <div id="signInDiv" alt={user.name}></div>
      { Object.keys(user).length !=0 &&
      <button onClick={(e)=>handleSignOut(e)}>Sign Out</button>
      }
      { user &&
      <div>
       <img src ={user.picture}></img>
       <h3>{user.name}</h3>
       </div>
        }
    </div>
  )


    }
    
export default Google;
