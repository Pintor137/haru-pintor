
import {Grid} from '@material-ui/core'
import { Product } from './Product'
import products from '../data/product'

export const ItemListenerContainer = () => {
   
    return (
        <>
             <Grid container spacing={4}>



                <Grid item xs={12} sm={6} md={3}>      

                        
                    <Product 
                            product="Product 1" 
                            descrption="Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica" 
                            stock="10" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>               
                    <Product 
                            product="Product 2" 
                            descrption="Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica" 
                            stock="5" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>               
                    <Product 
                            product="Product 3" 
                            descrption="Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica" 
                            stock="15" />
                </Grid>
               
            


            </Grid>  
        </>
    )
}
