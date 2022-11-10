import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import {
  auth,
  storage,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../Firebase/firebase";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const handleSubmit = (e) => {
    e.preventDefault()
    const image = e.target[0]?.files[0]
  
    if (!image) return null;
    const storageRef = ref(storage, `images/${image.name}`)
    uploadBytes(storageRef, image)
    .then((snapshot) => {
      e.target[0].value = ''
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        setUrl(downloadURL)
        console.log(downloadURL)
        })
      })
  } 

  const nav = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password, url);
  };
  useEffect(() => {
    if (loading) return;
    if (user) nav("/");
  }, [user, loading]);
  return (
    <div className="register">
      <Card sx={{ maxWidth: 345 }}>
        <Typography gutterBottom variant="h5" component="div" className="cardTitle">
          Daemon
        </Typography>
        <form className="form">
          <TextField type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            variant="standard" />
          <br />
          <TextField type="text"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            variant="standard" />
          <br />
          <TextField type="password"
            className="register__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            variant="standard" />
          <br />
          <Button className="register__btn" onClick={register} variant="outlined">Register</Button>
          <br />
          <Button className="register__btn register__google"
            onClick={signInWithGoogle} variant="outlined">Register with Google</Button>
          <br />
          <Typography variant="p" color="text.secondary">
            Already have an account? <Link to="/login">Login</Link> now.
          </Typography>
        </form>
        <form className='app__form' name='upload_file' onSubmit={handleSubmit}>
        <input type='file' />
        <button type='submit'>Upload</button>
        <p>URL: {url}</p>
      </form>
      </Card>
    </div>
  );
}
export default Register;