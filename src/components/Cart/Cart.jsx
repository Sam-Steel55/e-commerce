import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, onClickUpdate, onClickRemove, onClickEmpty }) => {
  const classes = useStyles();
  const isEmpty = !cart.total_items;

  const EmptyCart = () => (
    <Typography
      variant="subtitle1"
    >
      You have no items in your shopping cart, 
      <Link to="/" className={classes.link}>
         {" "} start adding some!
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CartItem item={item} onClickRemove={onClickRemove} onClickUpdate={onClickUpdate}  />
                              
          </Grid>
        ))}
      </Grid>

      <div className={classes.cartBottomElements}>
        <div className={classes.cartDetails}>
          <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        </div>
        <div className={classes.cartButtons}>
          <Button
            variant="contained"
            size="large"
            type="button"
            className={classes.emptyButton}
            color="secondary"
            onClick={onClickEmpty}
          >
            Empty Cart
          </Button>
          <Button
            variant="contained"
            size="large"
            type="button"
            className={classes.checkoutButton}
            color="primary"
            
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography
        align="center"
        gutterBottom
        className={classes.title}
        variant="h3"
      >
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
