// Config starter code
import { createChatBotMessage} from "react-chatbot-kit";
import LearningOptions from "../widgets/LearningOptions";
import LinkList from "../widgets/LinkList";
import LinkNew from "../widgets/LinkNew";


const config =  {
    botName: "Chat-Bot",
    customStyles: {
        botMessageBox: {
          backgroundColor: "#AD4B33"
        },
        chatButton: {
          backgroundColor: "#546E94"
        }
      },
    initialMessages: [
        createChatBotMessage(`Hey there! I’m your virtual assistant, Bot. What can I help you look up today?`, 
        {
            delay: 400,
            widget: "learningOptions",
        }),
    ],

    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },

        {
            widgetName: "things-todo",
            widgetFunc: (props) => <LinkList getFilter={props.getFilter} {...props} />,
            props: {
                options: [
                    {
                        text: "Tour",
                        name: "tour",
                        url: "/activity",
                        id: 3,
                    },
                    {
                        text: "Play",
                        name: "play",
                        url: "/activity",
                        id: 4,
                    },
                    {
                        text: "Shop",
                        name: "shop",
                        url: "/activity",
                        id: 5,
                    },
                    {
                        text: "Relax",
                        name: "relax",
                        url: "/activity",
                        id: 6,
                    },
                    {
                        text: "All Activities",
                        name: "",
                        url: "/activity",
                        id: 7,
                    },
                ],
            },
        },
        {
            widgetName: "food",
            widgetFunc: (props) => <LinkList getFilter={props.getFilter} {...props} />,
            props: {
                options: [
                    {
                        text: "Eat",
                        name: "eat",
                        url: "/activity",
                        id: 1,
                    },
                    {
                        text: "Drink",
                        name: "drink",
                        url: "/activity",
                        id: 2,
                    },
                    {
                        text: "All Activities",
                        name: "",
                        url: "/activity",
                        id: 3,
                    },
                ],
            },
        },
        {
            widgetName: "google",
            widgetFunc: (props) => <LinkNew {...props} />,
            props: {
                options: [
                    {
                        text: "How about I connect you with my friend, Google? Click here",
                        url: `https://www.google.com/`,
                        id: 1,
                    },
                    
                ],
            },
        },
        {
            widgetName: "forecast",
            widgetFunc: (props) => <LinkNew {...props} />,
            props: {
                options: [
                    {
                        text: "click here for Florence forecast",
                        url: `https://www.google.com/search?q=weather+florence&rlz=1C5CHFA_enUS979US981&oq=weather+florence&aqs`,
                        id: 1,
                    },
                    
                ],
            },
        },
        {
            widgetName: "exchange",
            widgetFunc: (props) => <LinkNew {...props} />,
            props: {
                options: [
                    {
                        text: "click here for current Euro to Dollar exchange rate ",
                        url: `https://www.google.com/search?q=euro+to+dollar+exchange+rate&rlz=1C5CHFA_enUS979US981&oq=euro+to+dollar+exchange+rate&aqs`,
                        id: 1,
                    },
                    
                ],
            },
        },
         
    ],
};

export default config;