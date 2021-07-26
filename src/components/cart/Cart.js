import React, { useContext } from 'react';
import Layout from '../MainLayout';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../utils/helpers';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
      primary: green,
    },
  });

const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    
    return ( 
        <Layout title="Order" description="Your Order Details are Here" >
            <div >
                <div className="text-center mt-5">
                    <h1>Order</h1>
                    <p>Your Order Details are Here</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Your Order is still empty
                            </div>
                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Checkout successfull</p>
                                <ThemeProvider theme={theme}>
                                    <Link to="/" style={{textDecoration: 'none'}}>
                                        <Button variant="contained" color="primary"><div style={{color: 'white'}}>Buy More</div></Button>
                                    </Link>
                                </ThemeProvider>
                                
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <Button type="button" 
                                    onClick={handleCheckout} 
                                    variant="contained" 
                                    color="primary">
                                        CHECKOUT
                                    </Button>
                                    <Button type="button" onClick={clearCart} 
                                    variant="contained" 
                                    color="secondary"
                                    style={{marginLeft: '2%'}}>
                                        CLEAR
                                    </Button>
                                </div>

                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </Layout>
     );
}
 
export default Cart;