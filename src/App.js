import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import lifeExpectancies from './api/lifeExpectancies';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/smallyellow.png';
import './App.css';
import moment from 'moment';

// source of data: http://databank.worldbank.org/data/reports.aspx?source=2&series=SP.DYN.LE00.MA.IN&country=#

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      country:'',
      year: 0,
      month: 0,
      gender: '',
      smoker: '',
      question: '',
      answerOptions: [],
      answer: '',
      birthday: moment(),
      date: moment('1991-10-03'),
      answersCount: {
        Nintendo: 0,
        Microsoft: 0,
        Sony: 0
      },
      dateOfDeath: moment(),
      quizFinished: false
    };
    //alert(lifeExpectancies["male"]["Sweden"]);

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      question.answers);
    this.setState({
      questionType: quizQuestions[0].questionType,
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    return array;
  }

  handleAnswerSelected(event) {
    if(quizQuestions[this.state.questionId-1].questionType === "radiobutton") {
      this.setUserAnswer(event.currentTarget.value, quizQuestions[this.state.questionId-1].answerInfo);
    } else if(quizQuestions[this.state.questionId-1].questionType === "date") {
      this.setUserAnswer(event.clone(), quizQuestions[this.state.questionId-1].answerInfo);

    } else {
      this.setUserAnswer(event.value, quizQuestions[this.state.questionId-1].answerInfo);
    }


    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setDateOfDeath(this.getDateOfDeath()), 300);
    }
  }

  setUserAnswer(answer, answerInfo) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: state.answersCount[answer] + 1
      },
      answer: answer
    }));
    if (answerInfo === "Country") {
      this.setState((state,props) => ({country: answer}));
    }
    if (answerInfo === "Birthday") {
      this.setState((state,props) => ({birthday: moment(answer.format())}));
    }
    if (answerInfo === "Gender") {
      this.setState((state,props) => ({gender: answer}));
    }
    if (answerInfo === "Smoker") {
      this.setState((state,props) => ({smoker: answer}));
    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      questionType: quizQuestions[counter].questionType,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getDateOfDeath() {
    var lifeExpectancy = lifeExpectancies[this.state.gender][this.state.country];
    lifeExpectancy = (this.state.smoker=="No") ? lifeExpectancy : lifeExpectancy-10;
    const birthday = this.state.birthday.clone();
    const returnDate = birthday.clone().add(lifeExpectancy*365.25,'day');
    return returnDate;
  }

  setDateOfDeath(localDeathDate) {
    this.setState({ dateOfDeath: localDeathDate });
    this.setState({ quizFinished: true});
  }

  renderQuiz() {
    return (
      <Quiz
        questionType={this.state.questionType}
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        startDate={this.startDate}
      />
    );
  }

  renderResult() {
    return <Result 
      dateOfDeath={this.state.dateOfDeath} 
      birthday = {this.state.birthday}
    />
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a href='http://analogmantra.com'>
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <h2>Death Quiz</h2>
        </div>
        {this.state.quizFinished ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
