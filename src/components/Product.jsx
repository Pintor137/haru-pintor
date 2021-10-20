import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Card,CardContent,CardHeader,CardMedia} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ItemCounter from '../TarejetaProduct/ItemCounter';

export const Product = () => {
    return (
        <>

        <Card >
          <CardMedia 
            component="img"
            height="140"
            image="tachos.png"
            alt="green iguana">
       
            </CardMedia>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
         
          </CardContent>
          <ItemCounter/>


          
        </Card>
            
        </>
    )
}
