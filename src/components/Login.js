import { Button } from "@mui/material";

export default function Login(){
  return(
    <div className="app">
      <div className="login">
      <div className="login__background"/>
      <div className="login__container">
        <img src="/logo.png" alt="Logo"/>
        <div className="login__text">
          <h1>Sign in to EpicChat</h1>
        </div>
        <Button>
          Sign in with Google
        </Button>
      </div>
      </div>
    </div>
  )
}