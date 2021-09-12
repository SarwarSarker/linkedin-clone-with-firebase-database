import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginuser } from "../../features/userSlice";
import "./login.css";

const Login = () => {
  const [signup, setSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    if (!name) {
      return alert("Name is Required");
    }
    if (!email) {
      return alert("Email is Required");
    }
    if (!password) {
      return alert("Password is Required");
    }
    if (!photoURL) {
      return alert("ImgUrl is Required");
    }

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Signed in
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          dispatch(
            loginuser({
              email: user.email,
              uid: user.uid,
              displayName: name,
              photoURL: photoURL,
            })
          );
        });
      })
      .catch((error) => alert(error.message));

    setName("");
    setEmail("");
    setPassword("");
    setPhotoURL("");
  };

  const signIn = (e) => {
    e.preventDefault();

    if (!email) {
      return alert("Email is Required");
    }
    if (!password) {
      return alert("Password is Required");
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch(
          loginuser({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="login">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
          alt="img"
        />

        {signup === true ? (
          <form onSubmit={register}>
            <input
              type="text"
              placeholder="Fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Profile Picture Url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input type="submit" value="Sign Up" />

            <h4>
              Already a member?
              <span onClick={() => setSignup(false)}> Login Here</span>
            </h4>
          </form>
        ) : (
          <form onSubmit={signIn}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input type="submit" value="Sign In" />

            <h4>
              Not a member?
              <span onClick={() => setSignup(true)}> Register Here</span>
            </h4>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
