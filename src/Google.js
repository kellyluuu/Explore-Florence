import {useEffect} from 'react'
import jwt_decode from "jwt-decode"



function Google(props) {
  function handleCallbackResponse(response){
    let userObject = jwt_decode(response.credential)
    props.getUserInfo((userObject))
    props.getEmail(userObject.email)
  }

  function handleSignOut(){
    props.getUserInfo({})
    props.getEmail({})
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
    <div id="signInDiv" style={{display: `${props.user.email?"none" : "inline"}`}} ></div>
      { props.user.email &&
      <button onClick={(e)=>handleSignOut(e)}>
        Sign Out</button>
      }
      { props.user.email  &&
      <div className="google--signedIn" >
        <img src ={props.user.picture} alt={props.user} className="google--picture" id="google--pic"></img>
        <h3 className="google--name">{props.user.name}</h3>
      </div>
        }
    </div>
  )
}
    
export default Google;
