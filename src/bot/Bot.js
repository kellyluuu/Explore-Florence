
import React from "react";
import { useState } from "react";
import "./styles.css";
import 'react-chatbot-kit/build/main.css'
import Chatbot from "react-chatbot-kit";
import config from "./bot/config";
import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";


function Bot(props) {
  const [showBot, toggleBot] = useState(false);
  return (
    <div className="App">
      {/* <h1>Florence Chatbot</h1>
      <h2>Start chatting with the Chatbot!</h2> */}


    {showBot && (
        <div className="app-chatbot-container">
          <Chatbot
            user={props.user}
            getFilter={props.getFilter}
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
    )}

      <button
        className="app-chatbot-button"
        onClick={() => toggleBot((prev) => !prev)}
      >
        <div>Chat</div>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" className="app-chatbot-button-icon">
          <path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm-3.5 10c0 .829-.671 1.5-1.5 1.5-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5zm5 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5z"></path>
        </svg>
      </button>
  </div>
  );
}

export default Bot;