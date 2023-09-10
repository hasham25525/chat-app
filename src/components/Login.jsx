import { auth } from "@/utils/firebase";
import { Button } from "@mui/material";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function Login() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div className="app">
      <div className="login">
        <div class="light x1" />
        <div class="light x2" />
        <div class="light x3" />
        <div class="light x5" />
        <div class="light x6" />
        <div class="light x7" />
        <div class="light x8" />
        <div class="light x9" />
        <div className="login__background"/>


        <div className="login__container">
          <img src="/logo.png" alt="Logo" />
          <div className="login__text">
            <h1>Sign in to EpicChat</h1>
          </div>
          <Button onClick={() => signInWithGoogle()}>
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
