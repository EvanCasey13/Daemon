import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Card, Image, Button, Input, Text } from '@nextui-org/react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import "./Login.css";
import Logo from '../../images/daemon_logo.png'
import { useFormik } from 'formik';
import * as yup from 'yup';

function Login() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="login">
      <Card css={{ mw: "420px" }}>
        <Image
          width={200}
          height={160}
          src={Logo}
          alt="Daemon Logo"
          objectFit="cover"
        />
        <div>
          <form className="form" onSubmit={formik.handleSubmit}>
            <Input labelPlaceholder="Email"
              id="email"
              className="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <br />
            <Input.Password labelPlaceholder="Password"
              id="password"
              className="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <br />
            <Button onClick={() => logInWithEmailAndPassword(formik.values.email, formik.values.password)} color="gradient" type="submit">
              Login
            </Button>
            <br />
            <Button className="login__btn login__google" onClick={signInWithGoogle} color="gradient">Login with Google</Button>
            <Text p>
              Don't have an account? <Link to="/register">Register</Link> now.
            </Text>
          </form>
        </div>
      </Card>
    </div>
  );
}
export default Login;