import React, {Component} from 'react';
import Question from './Question';

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedQuestionId: null }
    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }
  handleQuestionClick(id) {
    if(this.state.selectedQuestionId == id) {
        this.setState({selectedQuestionId: null})
    } else {
    this.setState({ selectedQuestionId: id });
    }  
  }

  render() {
    let questions = this.props.data.map(question => {
      let select = false;
      if(question.id === this.state.selectedQuestionId){
        select = true;
      }
      let onQuestionClick = () => this.handleQuestionClick(question.id);
      return(
        <Question
        key = {question.id}
        question = {question.question}
        answer = {question.answer}
        handleClick = {onQuestionClick}
        select = {select}
        />
      )
      }
      )
      return(
        <div>
          {questions}
        </div>
      )
    }
  }

export default QuestionList;
