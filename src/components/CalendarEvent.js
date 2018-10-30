import React from 'react';
import PropTypes from 'prop-types';
import lifeExpectancies from '../api/lifeExpectancies';
import { CSSTransitionGroup } from 'react-transition-group';
import moment from 'moment';
import AddToCalendar from 'react-add-to-calendar';


function CalendarEvent(props) {

  const ageAtDeath = props.dateOfDeath.diff(props.birthday, 'years');
  const yearsFromNow = props.dateOfDeath.diff(moment(),'years');
  const anniversaryYears = props.anniversary;
  const start = props.dateOfDeath.clone().subtract(anniversaryYears,'year').format("YYYY-MM-DD[T12:00:00]Z")
  const end = props.dateOfDeath.clone().subtract(anniversaryYears,'year').format("YYYY-MM-DD[T12:15:00]Z")
  var title = anniversaryYears + " years until you will die"
  var anniversaryArray = {
    title: title,
    description: "Hope you are doing something meaningful today!",
    location: "Everywhere",
    startTime: start,
    endTime: end
  };
  let icon = { 'calendar-plus-o': 'left' };
  if(moment(start).diff(moment(),'hour')>0) {
    return (
	    <div>
	      <AddToCalendar 
		      event={anniversaryArray} 
			    buttonTemplate={icon} 
			    buttonLabel={"Add "+anniversaryYears+"yr anniversary to calendar"}/>
	    </div>
	   );
  } else {
      return(null);
  }

}

export default CalendarEvent;