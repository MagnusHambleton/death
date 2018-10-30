import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types';

function DropDowm(props) {
  return (
    <Select options={options} />
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
