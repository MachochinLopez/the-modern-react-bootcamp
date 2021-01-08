import React, { useContext } from 'react';
// Context
import { LanguageContext } from './contexts/LanguageContext';
// My Styles
import useStyles from './styles/FormStyles';
// Material UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const words = {
  english: {
    email: "Email Address",
    password: "Password",
    remember: "Remember Me",
    signIn: "Sign In"
  },
  french: {
    email: "Adresse Èlectronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi",
    signIn: "Se Connecter"
  },
  spanish: {
    email: "Correo Electrónico",
    password: "Contraseña",
    remember: "Recuérdame",
    signIn: "Iniciar Sesión"
  }
};

export default function Form(props) {
  const { changeLanguage, language } = useContext(LanguageContext);
  const classes = useStyles();
  const { email, password, remember, signIn } = words[language];

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{ signIn }</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="french">French</MenuItem>
          <MenuItem value="spanish">Español</MenuItem>
        </Select>
         <form className={classes.form}>
           <FormControl margin="normal" required fullWidth>
             <InputLabel htmlFor="email">{ email }</InputLabel>
             <Input autoFocus id="email" name="email" />
           </FormControl>
           <FormControl margin="normal" required fullWidth>
             <InputLabel htmlFor="password">{ password }</InputLabel>
             <Input autoFocus id="password" name="password" />
           </FormControl>
           <FormControlLabel control={<Checkbox color="primary" />} label={remember} />
           <Button className={classes.submit} color="primary" fullWidth type="submit" variant="contained">{ signIn }</Button>
         </form>
      </Paper>
    </main>
  );
};