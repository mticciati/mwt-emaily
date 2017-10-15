import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

import SurveyField from './SurveyField';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({label, name}) => {
      return <Field key={name} type="text" component={SurveyField} label={label} name={name} />
    });
  }

  render() {
    return(
      <div>
        <h3>Survey Form</h3>
        <form 
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to="/surveys" className="btn red waves-effect waves-light left">cancel
            <i className="material-icons left">cancel</i>
          </Link>
          <button className="btn waves-effect waves-light right" type="submit" name="action">Next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    );
  }
  
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({name}) => {
    if (!values[name]) {
      errors[name] = 'Please provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);