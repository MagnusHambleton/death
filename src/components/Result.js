import React from 'react';
import PropTypes from 'prop-types';
import lifeExpectancies from '../api/lifeExpectancies';
import { CSSTransitionGroup } from 'react-transition-group';
import moment from 'moment';
import AddToCalendar from 'react-add-to-calendar';
import CalendarEvent from './CalendarEvent';

function Result(props) {

  const ageAtDeath = props.dateOfDeath.diff(props.birthday, 'years');
  const yearsFromNow = props.dateOfDeath.diff(moment(),'years');


  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You will die in {yearsFromNow} years time on <strong>{props.dateOfDeath.format("dddd [the] Do [of] MMMM YYYY")}</strong>, at an age of <strong>{ageAtDeath}</strong> years
      </div>
      <CalendarEvent 
        dateOfDeath = {props.dateOfDeath}
        anniversary = {50}
      />
      <CalendarEvent 
        dateOfDeath = {props.dateOfDeath}
        anniversary = {40}
      />
      <CalendarEvent 
        dateOfDeath = {props.dateOfDeath}
        anniversary = {30}
      />
      <CalendarEvent 
        dateOfDeath = {props.dateOfDeath}
        anniversary = {25}
      />
      <CalendarEvent 
        dateOfDeath = {props.dateOfDeath}
        anniversary = {20}
      />
      <CalendarEvent 
        dateOfDeath = {props.dateOfDeath}
        anniversary = {15}
      />
      <CalendarEvent 
        dateOfDeath = {props.dateOfDeath}
        anniversary = {10}
      />
      <CalendarEvent 
        dateOfDeath = {props.dateOfDeath}
        anniversary = {5}
      />
      <CalendarEvent 
        dateOfDeath = {props.dateOfDeath}
        anniversary = {1}
      />

    </CSSTransitionGroup>
  );
}

export default Result;
