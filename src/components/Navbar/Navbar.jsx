import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/Swift-Shop.png';
import useStyles from './styles';

const Navbar = ({ items }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position='fixed' className={classes.appBar} color="inherit">
      <Toolbar>
        {/* Logo and title */}
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
          color="inherit"
        >
          <img src={logo} alt='Shopmore' height="30px" className={classes.image} />
          Shopmore
        </Typography>

        {/* Spacer */}
        <div className={classes.grow} />

        {/* Shopping cart icon */}
        {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton
              aria-label='Show cart items'
              component={Link}
              to="/cart"
              color='inherit'
            >
              {/* Badge with cart item count */}
              <Badge overlap="rectangular" badgeContent={items.total_items} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
