import React, { useContext } from 'react';
// Context
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';
// My Styles
import styles from './styles/NavBarStyles';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const content = {
  english: {
    flag: "🇺🇸",
    search: "Search"
  },
  french: {
    flag: "🇫🇷",
    search: "Chercher"
  },
  spanish: {
    flag: "🇲🇽",
    search: "Buscar"
  }
};

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { classes } = props;
  const { search, flag } = content[language];

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color={isDarkMode ? "default" : "primary"}
      >
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
          >
            <span>{flag}</span>
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
          >
            App title
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder={`${search}...`} classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);