import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Card,CardContent,CardHeader,CardMedia,Link} from '@material-ui/core';

import ItemCounter from '../../TarejetaProduct/ItemCounter';

export const Product = (props) => {
    return (
        <Card >
          <CardMedia 
            component="img"
            height="140"
            image="tachos.png"
            alt="green iguana">
       
            </CardMedia>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">

            <Link href={`/item/${props.id}`}>
              {props.name}
            </Link>
        
            </Typography>

            <Typography gutterBottom variant="h6" component="div">     
              {props.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {props.description}
            </Typography>
         
          </CardContent>
          <ItemCounter stock={props.stock} />


          
        </Card>
            
       
    )
}
