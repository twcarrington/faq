import React from 'react';


const Question = props => {
  let output;
  if (props.select) {
    output = `${props.answer}`
  }

  return(
    <div onClick={props.handleClick} className="row callout single-question columns small-6">
      <i className="fa fa-plus-square" aria-hidden="true"></i>
      <span className="question">{props.question}</span>
      <span className="answer">{output}</span>
    </div>
  );
};

export default Question;
