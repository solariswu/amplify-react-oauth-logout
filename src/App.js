import React, { Component } from "react";
import Amplify from "@aws-amplify/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Landing from "./Components/Landing";
import Logout from "./Components/Logout";


Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_FC8kBApuy",
    userPoolWebClientId: "235qakl0if7b3vss5ikehppnmi",
    oauth: {
      domain: "magiclink.auth.us-east-1.amazoncognito.com",
      scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: "https://amplify-react-oauth-logout.netlify.app/landing/",
      redirectSignOut: "https://amplify-react-oauth-logout.netlify.app/logout/",
      responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
  },
});

class App extends Component {
  render() {
    Amplify.Logger.LOG_LEVEL = "VERBOSE";

    // console.log("Your process.env.PUBLIC_URL", process.env.PUBLIC_URL);

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/landing" component={Landing} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
