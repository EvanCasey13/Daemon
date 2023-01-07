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
import { Card, Image, Button, Input, Text } from '@nextui-org/react';
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
      password: ''
    },
    validationSchema: validationSchema,
  });

  const register = () => {
    registerWithEmailAndPassword(formik.values.accountName, formik.values.email, formik.values.password, url);
  };

  return (
    <div className="register">
      <Card css={{ mw: "420px" }}>
      <Image
      width={200}
      height={160}  
      src={Logo} 
      alt="Daemon Logo"
      objectFit="cover"
    />
        <form className="form" onSubmit={formik.handleSubmit}>
          <Input labelPlaceholder="Account name"
            size="md" 
            id="accountName"
            className="register__textBox"
            value={formik.values.accountName}
            onChange={formik.handleChange}
            error={formik.touched.accountName && Boolean(formik.errors.accountName)}
            helperText={formik.touched.accountName && formik.errors.accountName}
          />
          <br />
          <Input labelPlaceholder="Email address"
            size="md" 
            id="email"
            className="register__textBox"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <br />
          <Input.Password labelPlaceholder="Password"
            size="md" 
            id="password"
            className="register__textBox"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <br />
          <Button className="register__btn" onClick={register} color="gradient" type="submit">Register</Button>
          <br />
          <Button className="register__btn register__google"
            onClick={signInWithGoogle} color="gradient">Register with Google</Button>
          <br />
          <Text p>
            Already have an account? <Link to="/login">Login</Link> now.
          </Text>
        </form>
        <form onSubmit={handleSubmit}>
        <input type='file' />
        <button type='submit'>Upload</button>
        </form>
      </Card>
    </div>
  );
}
export default Register;