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
import Logo from '../../images/daemon_logo.png'
import { useFormik } from 'formik';
import * as yup from 'yup';

function Register() {
  const [url, setUrl] = useState("");
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
  useEffect(() => {
    if (loading) return;
    if (user) nav("/");
  }, [user, loading]);

  const validationSchema = yup.object({
    accountName: yup
      .string('Enter your account name')
      .required('Account name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      accountName: '',
      email: '',
      password: '',
      urlV: '',
    },
    validationSchema: validationSchema,
  });

  const register = () => {
    registerWithEmailAndPassword(formik.values.accountName, formik.values.email, formik.values.password, url);
  };

  return (
    <div className="register">
      <Card sx={{ maxWidth: 380 }}>
        <img src={Logo} className="logo" alt="Daemon Logo" />
        <form className="form" onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="accountName"
            className="register__textBox"
            label="Account name"
            value={formik.values.accountName}
            onChange={formik.handleChange}
            error={formik.touched.accountName && Boolean(formik.errors.accountName)}
            helperText={formik.touched.accountName && formik.errors.accountName}
          />
          <br />
          <TextField
            fullWidth
            id="email"
            className="register__textBox"
            label="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <br />
          <TextField
            fullWidth
            id="password"
            className="register__textBox"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <br />
          <Button className="register__btn" onClick={register} variant="outlined" type="submit">Register</Button>
          <br />
          <Button className="register__btn register__google"
            onClick={signInWithGoogle} variant="outlined">Register with Google</Button>
          <br />
          <Typography variant="p" color="text.secondary">
            Already have an account? <Link to="/login">Login</Link> now.
          </Typography>
        </form>
        <form onSubmit={handleSubmit}>
        <input type='file' />
        <button type='submit'>Upload</button>
        <p>URL: {url}</p>
        </form>
      </Card>
    </div>
  );
}
export default Register;