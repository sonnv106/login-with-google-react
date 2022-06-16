import "./App.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useEffect } from "react";
import {gapi} from 'gapi-script'
import ReactFacebookLogin from "react-facebook-login";

function App() {
  const onSuccess = (response) => {
    console.log("Login success! Curent user: ", response);
  };
  const onFailure = (result) => {
    console.log("Login Failed! res: ", result);
  };
  const onLogoutSuccess = () => {
    console.log("Logout successfull");
  };
  const responseFacebook = (response)=>{
    console.log(response)
  }
  const componentClicked = (data)=>{
    console.warn(data)
  }
  useEffect(()=>{
    const start = ()=>{
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: ''
      })
    };
    gapi.load('client:auth2', start)
  }
  )
  return (
    <div className="App">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
      ></GoogleLogout>
      <ReactFacebookLogin
      appId="1394109910723230"
      autoLoad={true}
      fields="name, email, picture"
      onClick={componentClicked}
      callback={responseFacebook}
      >

      </ReactFacebookLogin>
    </div>
  );
}

export default App;
