import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
// Utility
import {makeStyles} from '@material-ui/core/styles';
import {FormattedMessage} from 'react-intl';
import {useHistory} from 'react-router-dom';
// Icons
import LanguageIcon from '@material-ui/icons/Language';
// Actions
import {setLocale} from '../../actions/locale';

const useStyles = makeStyles({
  langButton: {
    marginLeft: 'auto',
  },
});

function Navbar(props) {
  const classes = useStyles();
  const history = useHistory();
  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang = '') => {
    setAnchorEl(null);
    if (typeof(lang) === 'string') {
      props.setLocale(lang);
    }
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          <FormattedMessage id="navbar" defaultMessage="navbar"/>
        </Typography>
        { /* Nav Buttons */}
        <Button color="secondary" onClick={() => history.push('/home')}>Home</Button>
        <Button color="secondary" onClick={() => history.push('/about')}>About</Button>
        { /* Lang Change */}
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          className={classes.langButton}
        >
          <LanguageIcon />
        </IconButton>
        { /* Lang Change Menu */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
          <MenuItem onClick={() => handleClose('sr')}>Serbian</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  setLocale: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  setLocale,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
