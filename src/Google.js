import {useEffect} from 'react'



function Google(props) {
  const handleCallbackResponse = props.handleCallbackResponse
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
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='google'>
      <div id="signInDiv" alt={props.user.name}></div>
      { Object.keys(props.user).length !==0 &&
      <button onClick={(e)=>props.handleSignOut(e)}>
        Sign Out</button>
      }
      { props.user &&
      <div className="google--signedIn">
        <img src ={props.user.picture} alt='profileimage' className="google--picture" id="google--pic"></img>
        <h3 className="google--name">{props.user.name}</h3>
      </div>
        }
    </div>
  )


    }
    
export default Google;
