import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import Select from 'react-select'
import DatePicker from 'react-datepicker';

import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


function Quiz(props) {
  const questionType = props.questionType;
  const startDate = moment('1991-10-03');
 
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  if (questionType == "radiobutton") {
    return (
      <CSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div key={props.questionId}>
          <QuestionCount counter={props.questionId} total={props.questionTotal} />
          <Question content={props.question} />
            <ul className="answerOptions">
              {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
      </CSSTransitionGroup>
    );
  }
  if (questionType == "dropdown") {
    return (
      <CSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div key={props.questionId}>
          <QuestionCount counter={props.questionId} total={props.questionTotal} />
          <Question content={props.question} />
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={props.answerOptions[0]}
            name="countries"
            options={props.answerOptions}
            onChange={props.onAnswerSelected}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
              ...theme.colors,
                text: 'orangered',
                primary25: '#fade29',
                primary: 'black',
              },
            })}
          />

        </div>
      </CSSTransitionGroup>
    );
  }

  if (questionType == "date") {
    return (
      <CSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div key={props.questionId}>
          <QuestionCount counter={props.questionId} total={props.questionTotal} />
          <Question content={props.question} />
            <DatePicker
              className="date-picker-text-box"
              classNamePrefix="select"
              selected={moment('1991-10')}
              startDate={moment('1991-10-03')}
              onChange={props.onAnswerSelected}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              allowSameDay = {true}
              popperPlacement= "bottom-end"
            />

        </div>
      </CSSTransitionGroup>
    );
  }
}

Quiz.propTypes = {
  answer: PropTypes.object.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
