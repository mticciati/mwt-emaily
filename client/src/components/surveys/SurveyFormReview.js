import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

import formFields from './formFields';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

  const reviewFields =  _.map(formFields, ({label, name}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Survey Form Review</h5>
      <div>
        {reviewFields}
      </div>
      <button 
        onClick={onCancel} 
        className="btn red waves-effect waves-light left"
      >
        Back
        <i className="material-icons left">arrow_back</i>
      </button>
      <button 
        onClick={() => submitSurvey(formValues, history)}
        className="btn waves-effect waves-light right" 
        type="submit" 
        name="action"
      >
        Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));