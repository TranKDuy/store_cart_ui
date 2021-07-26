import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../utils/helpers';

import Button from '@material-ui/core/Button';

const Products = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card card-body">
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
            src={product.photo + '?v=' + product.id} alt=""/>
            <p>{product.name}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className="text-right">

                {
                    isInCart(product) && 
                    <Button 
                    onClick={() => increase(product)}
                    variant="contained" color="default" style={{marginLeft: '30%'}}
                    >Add more</Button>
                }

                {
                    !isInCart(product) && 
                    <Button 
                    onClick={() => addProduct(product)}
                    variant="contained" color="primary" style={{marginLeft: '25%'}}  
                    >Add to cart</Button>

                    
                }
                
            </div>
        </div>
     );
}
 
export default Products;