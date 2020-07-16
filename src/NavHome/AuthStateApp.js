import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } 
from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';
import { withRouter } from "react-router-dom";

import { NavLink} from 'react-router-dom'
import awsconfig from '../aws-exports';



Amplify.configure(awsconfig);

Auth.currentCredentials().then(creds => console.log(creds));
// Auth.currentSession() does not currently support federated identities. Please store the auth0 session info manually(for example, store tokens into the local storage).



const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    
  return authState === AuthState.SignedIn && user ? (
      <div className="App">
          <div>Hello, {user.username}</div>
      </div>
    ) : (
      <AmplifyAuthenticator />
  );
}

export default AuthStateApp;