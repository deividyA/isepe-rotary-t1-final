import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import React from "react";
import PropTypes from "prop-types";

const App = (props) => {
  const appProps = props.user_email;
  return (
    <React.Fragment>
      <MainHeader user_email={appProps}/>
      <MainFooter />
    </React.Fragment>
  )
}

App.propTypes = {
  user_email: PropTypes.string
};

export default App
