import React from 'react';
import QuestionList from './QuestionList';

const App = props => {
  return(
    <div>
        <QuestionList
          data = {props.data}
        />
    </div>
  )
};

export default App;
