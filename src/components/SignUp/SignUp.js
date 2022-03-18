import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Snack from '../../components/snackbar';
import FacebookSignUp from "./facebooksignin"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function SignUp(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      country: event.target[2].value,
      email: event.target[3].value,
      password: event.target[4].value,
      from: 'form-Signup'
    }
    props.signUpUser(userData)
  }
  /* SELECT */
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data))
      .catch((error) => console.log(error))
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">

        <Snack />
        <h1 className='mb-5 mt-5'>Create a new User</h1>
        <h2 className='mb-5'>Using Facebook</h2>
        <FacebookSignUp />

        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="family-name"
                  name="lastName"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">From</InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="From"
                  >
                    <MenuItem>
                      Choose your country
                    </MenuItem>
                    {countries.map((country, key) =>
                      <MenuItem value={country.name} key={key}>
                        {country.name}
                      </MenuItem>)}

                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    message: state.userReducer.message,
  }
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);