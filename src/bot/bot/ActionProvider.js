class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  handleThingsTodo = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on things todo. Just click on the type of activities you would like to see and I will take you there!",
      {
        delay: 400,
        widget: "things-todo",
      }
    );

    this.updateChatbotState(message);
  };

  handleFood = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on food. Just click on the catagory you would like to see and I will take you there!",
      {
        delay: 400,
        widget: "food",
      }
    );

    this.updateChatbotState(message);
  };

  handleBye = () => {
    const message = this.createChatBotMessage(
      "Thank you for reaching out to us today. Have a great day, bye!",
      {
        delay: 400,
      }
    );

    this.updateChatbotState(message);
  };

  handleForecast = () => {
    const message = this.createChatBotMessage(
      "Here's a 5 day forecast in Florence.",
      {
        delay: 400,
        widget: "forecast",
      }
    );

    this.updateChatbotState(message);
  };

  handleExchange = () => {
    const message = this.createChatBotMessage(
      "I can help you with that! Just click below and I will take you there!",
      {
        delay: 400,
        widget: "exchange",
      }
    );

    this.updateChatbotState(message);
  };

  greet() {
    const greetingMessage = this.createChatBotMessage(`Hi, there friend!.`)
    this.updateChatbotState(greetingMessage)
  }

  noAnswer() {
    const greetingMessage = this.createChatBotMessage(
      "Oops, you got me! Unfortunately, I’m not sure how to answer this. My creator, Cheryl, Fernando, and Kelly, limited my knowledge on this subject.",
      {
      delay: 400,
      widget: "google"
      }
      ) 
  
      this.updateChatbotState(greetingMessage)   
  }

  
  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;