import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import StripeWrapper from './StripeWrapper';

class Header extends Component {
  renderContent() {
    const {auth} = this.props;
    switch(auth) {
      case null:
        return;
      case false:
        return [
          <li key="1"><a href="/auth/google" className="waves-effect waves-light">Log in with Google</a></li>
        ];
      default:
        return [
          <li key="1"><StripeWrapper/></li>,
          <li key="2">Credits: {this.props.auth.credits}</li>,
          <li key="3"><a href="/api/logout" className="waves-effect waves-light">Logout</a></li>
        ]; 
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link 
            to={this.props.auth ? '/surveys' : '/'} 
            className="brand-logo left"
          >
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps)(Header);