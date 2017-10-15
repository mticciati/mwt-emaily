import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import queryString from 'query-string';

import FlashMessage from './FlashMessage';
import SurveyList from './surveys/SurveyList';

const Dashboard = ({history}) => {
  const query = queryString.parse(history.location.search);
  
  const renderMsg = () => {
    if (query) {
      let background, text, msg;
      if (query.success) {
        msg = 'Congratulations! Your survey has been sent.';
        
      } else if(query.error) {
        msg = 'Uh oh! Something went wrong... how embarrassing.';
      }
      return <FlashMessage background={background} text={text} msg={msg} />
    }
    return;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {renderMsg()}
      <SurveyList />
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/surveys/new">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  )
}

export default withRouter(Dashboard);