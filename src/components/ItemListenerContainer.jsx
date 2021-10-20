
import {Grid} from '@material-ui/core'
import { Product } from './Product'

export const ItemListenerContainer = () => {
    return (
        <>
             <Grid container spacing={4}>



                <Grid item xs={12} sm={6} md={3}>               
                    <Product />
                </Grid>
               
                <Grid item xs={12} sm={6} md={3}>               
                    <Product/>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>               
                    <Product/>
                </Grid>


            </Grid>  
        </>
    )
}
