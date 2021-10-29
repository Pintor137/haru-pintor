import {React} from 'react'
import { useEffect, useState } from "react";
import { promises } from "../promises/promiseProduct";
import {Grid} from '@material-ui/core'
import { Product } from './Product'
import { products } from '../../data/product';

const ItemListContainer = () => {
        const [message, setMessage] = useState("");
        const [isSuccess, setIsSuccess] = useState(false);
        const [isLoading, setIsLoading] = useState(true);
        const [isFinished, setIsFinished] = useState(false);
        const [currentProducts, setCurrentProducts] = useState([]);
      
        useEffect(() => {
          if (products) {
            promises(
              products,
              setMessage,
              setIsSuccess,
              setIsLoading,
              setIsFinished,
              setCurrentProducts
            );
          }
        }, [products]);
    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
        
            <Grid container spacing={4}>
            {currentProducts.map((product) => (
                <Grid item xs={12} sm={6} md={3}>    
                    <Product key={product.id} {...product} />
                </Grid>
            ))}
             </Grid>
        </div>
    )
}

export default ItemListContainer
