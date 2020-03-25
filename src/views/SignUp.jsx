
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockInlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from"./Navbar";
import {NavLink, Link, useHistory } from "react-router-dom"
import { Formik,  Form } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP_USER } from "../helpers/queries/queries.helper.gql";
import { ToastMessage, type } from '../helpers/toatser/Toastr.helper';



export default function SignUp() {
  const classes = useStyles();

  const [ onSignUp ] = useMutation(SIGNUP_USER)
  const history = useHistory()

  return (<>
          <NavBar/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockInlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Formik
    initialValues={{

      username: '',
      phone: '',
      email: '',
      password: '',
    }}
    onSubmit={async (values, {resetForm, setSubmitting}) => {
      console.log(values);
      try {
        const {  data: { createUser } } = await onSignUp({
          variables: { ...values }
        });

        sessionStorage.setItem('tribr_token', createUser);
        resetForm();
        ToastMessage(type.SUCCESS, 'SignUp Successfully');
        history.push('/login')
      } catch ( e ) {
        setSubmitting(false);
      }
    
    }}
    render={(props) => (
        <Form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
             <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                // id="firstName"
                label="username"
                autoFocus
                onChange={props.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // id="lastName"
                label="phone"
                name="phone"
                autoComplete="phone"
                onChange={props.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={props.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                // label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={props.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to = "/login">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </Form>
        )}
        />
          {/*formik ends here*/}

      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  </>);
}

function Copyright() {

  

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" >
      Learn Factory
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
