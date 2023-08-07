import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from "./styles";

const Product = ({product}) => {
  const classes = useStyles();
  return (
   <Card className={classes.root}>
    
    {/* image file of the product */}
     <CardMedia className={classes.media} component="img" image="" title={product.name} />
{/* product information */}
            <CardContent>
              <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom >
                    {product.name}
                </Typography>

                <Typography variant='h5' >
                    {product.price}
                </Typography>
               </div>
{/* product description */}
              <Typography variant='h2' color='textSecondary'>
               {product.description}
              </Typography>
            </CardContent>

            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label='Add to Card'>
                  <AddShoppingCart />
                </IconButton>
            </CardActions>
   </Card>
  )
}

export default Product