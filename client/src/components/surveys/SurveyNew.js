import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {reduxForm} from 'redux-form';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component { 

  state = {showFormReview: false};

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview 
          onCancel={() => this.setState({showFormReview: false})} 
        />
      );
    }
    return (
      <SurveyForm 
        onSurveySubmit={() => this.setState({showFormReview: true})} 
      />
    );
  }

  render() {
    return (
      <div>
        <h1>Survey/New</h1>
        <Link to="/surveys">Cancel</Link>
        
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);