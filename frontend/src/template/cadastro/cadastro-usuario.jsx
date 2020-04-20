import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../../css/cadastro-usuario.css'



const useStyles = makeStyles((theme) => ({
  paper: {
    width:'100%',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(40),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    paddingLeft:'30px',
    paddingRight:'30px',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
width : '200px',
float: 'center',
    margin: theme.spacing (3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container id = 'container' component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>

<Grid item xs={10} sm={4}>
  <TextField
    autoComplete="fname"
    name="firstName"
    variant="outlined"
    required
    fullWidth
    id="firstName"
    label="Nome completo (Administrador)"
    autoFocus
  />
</Grid>

  <Grid item xs={10} sm={4}>
      <TextField
      variant="outlined"
      required
      fullWidth
      id="nome-empresa"
      label="Nome da Empresa"
      name="name"
      autoComplete="nome"
      />
  </Grid>

  <Grid item xs={10} sm={4}>
          <TextField
          variant="outlined"
          required
          fullWidth
          id="tipo-empresa"
          label="Tipo empresa"
          name="filial ou matriz"
          autoComplete="tipo"
          />
  </Grid>
  </Grid>

<Grid container spacing={2}>

      <Grid item xs={10} sm={4}>
          <TextField
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          />
      </Grid>
      
      <Grid item xs={10} sm={4}>
          <TextField
          variant="outlined"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          />
      </Grid> 

      <Grid item xs={10} sm={4}>
          <TextField
          variant="outlined"
          required
          fullWidth
          name="confirm-password"
          label="Confirmar senha"
          type="password"
          id="confirm-password"
          autoComplete="current-password"
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
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}