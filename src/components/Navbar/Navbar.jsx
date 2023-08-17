import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from "../../assets/Swift-Shop.png";
import useStyles from "./styles";

const Navbar = ({ items }) => {
    const classes = useStyles();

    return (
        <>
            {/* AppBar with a fixed position */}
            <AppBar position='fixed' className={classes.appBar} color="inherit" >
                <Toolbar>
                    {/* Logo and title */}
                    <Typography variant='h6' className={classes.appBar}>
                        <img src={logo} alt='Commerce.js' height="25px" className={classes.image} />
                        Shopmore
                    </Typography>

                    {/* Spacer */}
                    <div className={classes.grow} />

                    {/* Shopping cart icon */}
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart items' color='inherit'>
                            {/* Badge with cart item count */}
                            <Badge overlap="rectangular" badgeContent={items.total_items} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
