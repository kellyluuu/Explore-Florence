

import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Things Todo",
      handler: props.actionProvider.handleThingsTodo,
      id: 1,
    },
    {
      text: "Food",
      handler: props.actionProvider.handleFood,
      id: 2,
    },
    { text: "Florence Forecast", 
      handler:  props.actionProvider.handleForecast, 
      id: 3, 
    },
    {
      text: "Exchange Rate",
      handler: props.actionProvider.handleExchange,
      id: 4,
    },

    
  ];


  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;