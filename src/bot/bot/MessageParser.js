// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || 
    lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    }
    else if (lowerCaseMessage.includes("todo")||
    lowerCaseMessage.includes("activit") ||
    lowerCaseMessage.includes("eat") ||
    lowerCaseMessage.includes("shop") ||
    lowerCaseMessage.includes("relax") ||
    lowerCaseMessage.includes("explore")) {
      this.actionProvider.handleThingsTodo();
    } 
    else if (lowerCaseMessage.includes("exchange")||
    lowerCaseMessage.includes("rate") ||
    lowerCaseMessage.includes("dollar")) {
      this.actionProvider.handleExchange();
    } 
    else if (lowerCaseMessage.includes("food")||
    lowerCaseMessage.includes("hungry") ||
    lowerCaseMessage.includes("drink")) {
      this.actionProvider.handleFood();
    } 
    else if (lowerCaseMessage.includes("weather")||
    lowerCaseMessage.includes("forecast") ||
    lowerCaseMessage.includes("sunny") ||
    lowerCaseMessage.includes("rain")) {
      this.actionProvider.handleForecast();
    } 
    else{
      this.actionProvider.noAnswer()
    }
  }
}

export default MessageParser;