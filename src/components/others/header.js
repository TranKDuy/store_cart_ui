import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {

    const { itemCount } = useContext(CartContext);
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link to='/' style={{textDecoration: 'none'}}><Button style={{color: 'white'}}>DeliV</Button></Link>
                    </Typography>
                    <Button color="inherit">
                        <Link to='/cart' style={{display: 'inline-block', textDecoration: 'none'}}>
                            <Button style={{color: 'white'}}><ShoppingCartIcon /> Cart ({itemCount})</Button>
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;