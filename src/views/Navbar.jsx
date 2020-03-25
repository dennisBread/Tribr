import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from "../styles/lib/header.styles";
import Button from '@material-ui/core/Button';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                       Tribr
          </Typography>

                   <Button ><NavLink className={classes.links} to='/'>Home</NavLink></Button>
                    {/* <Button><NavLink className={classes.links} to='/login'>Login</NavLink></Button> */}
                    <Button><NavLink className={classes.links} to='/about'>About</NavLink></Button>
                    <Button><NavLink className={classes.links} to='/contact'>Contact</NavLink></Button>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
