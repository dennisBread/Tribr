import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from "../../styles/lib/header.styles";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h4" className={classes.title}>
                        Tribal
                     </Typography>
                    {/* <Button><NavLink className={classes.links} to='/about'>About</NavLink></Button>
                    <Button><NavLink className={classes.links} to='/contact'>Contact</NavLink></Button> */}
                    <Button className={classes.button}><NavLink className={classes.getStarted} to='/login'>Get Started</NavLink></Button>
                </Toolbar>
            </AppBar>
        </Grid>
    );
};

export default Header;
