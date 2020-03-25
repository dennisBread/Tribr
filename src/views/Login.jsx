
import React from "react";
import NavBar from './Navbar'
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, useHistory } from "react-router-dom"
import { Formik,  Form } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN_USER } from "../helpers/queries/queries.helper.gql";
import { ToastMessage, type } from '../helpers/toatser/Toastr.helper';

export default function SignIn() {
  const classes = useStyles(); //calling the formstyles defined below.

//   const [state, setState] = React.useState({
//     email: '',
//     password: '',
//   })

//  const handleSubmit = (e) =>{
//    e.preventDefault()
//   console.log(state.email, state.password);
//  }
// //  const handleChange = ({target: {value}}) => setState(value);
//  const handleChange =({target})=> {
//   setState(prevState => ({...prevState, [target.name]: target.value}))
//  }

  const [ onLoginUser ] = useMutation(LOGIN_USER)
  const history = useHistory()
  return (<>
      <NavBar />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    onSubmit={async (values, {resetForm, setSubmitting}) => {
      console.log(values);
      try {
        const {  data: { loginUser } } = await onLoginUser({
          variables: { ...values }
        });

        sessionStorage.setItem('tribr_token', loginUser);
        resetForm();
        ToastMessage(type.SUCCESS, 'Login Successfully');
        history.push('/Dashboard')
      } catch ( e ) {
        setSubmitting(false);
      }
    
    }}
    render={(props) => (
        <Form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            // id="email"
            label="Email Address"
            name="email"
            // value={state.email}
            onChange={props.handleChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            // value={state.password}
            onChange={props.handleChange}
            label="Password"
            type="password"
            // id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={<p className={classes.links}>Remember me</p>}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <Link className={classes.login} >Log In</Link>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link className={classes.links}  variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link className={classes.links}  to="/SignUp" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Form>
         )}
         />
  {/*formik ends here*/}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  </>);
}
// ------------------------------form footer--------------------------------------------------------
function Copyright() {
  const classes = useStyles(); //calling the formstyles defined below.
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link className={classes.links} color="inherit" to='/'>
        Learn Factory
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// -------------------------form styles----------------------------------------------
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  links:{
    color: '#880e4f',
    textDecoration: 'none',
    '&:hover':{
      opacity: .7
    }},
  login:{
    color: 'white',
    textDecoration: 'none',
    '&:hover':{
      opacity: .7
  }  
  }
}));
