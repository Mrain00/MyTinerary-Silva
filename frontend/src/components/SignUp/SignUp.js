import * as React from 'react';
import { useState, useEffect } from 'react'
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FacebookSignUp from "./facebooksignup";
import userActions from '../../redux/actions/userActions'
import paisesActions from '../../redux/actions/paisesActions';

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
  console.log(props)
  /* SELECT */
  useEffect(() => {
    props.fetchearPaises()
    // eslint-disable-next-line
  }, []);

  const paises = [...props.pais]

  const [countries, setCountries] = useState("unselected");
  function handleChange(event){
    setCountries(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[2].value,
      email: event.target[8].value,
      password: event.target[10].value,
      country: countries,
      imagenURL: event.target[6].value,
      from: 'form-Signup'
    }
    console.log(event)
    console.log(userData)
    props.signUpUsers(userData)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
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
{/* SELECT */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="From"
                    onChange={handleChange}
                  >
                    <MenuItem defaultValue="Choose your country">
                      Choose your country
                    </MenuItem>
                    {paises?.map((country, index) =>
                      <MenuItem value={country} key={index}>
                        {country}
                      </MenuItem>)}

                  </Select>
                </FormControl>
                </Grid>
{/* PHOTO */}
<Grid item xs={12}>
                <FormControl fullWidth>
                <TextField
                  autoComplete="family-name"
                  name="imagenURL"
                  fullWidth
                  id="imagenURL"
                  label="Photo"
                  autoFocus
                />
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
            <Grid item xs={12} >
              <FacebookSignUp />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
            >
              Sign Up
            </Button>
            </Grid>
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
    pais: state.paisesReducer.pais
  }
}

const mapDispatchToProps = {
  signUpUsers: userActions.signUpUsers,
  fetchearPaises: paisesActions.fetchearPaises
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);