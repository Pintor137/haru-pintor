import React from 'react'
import {useParams} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Card,CardContent,CardHeader,CardMedia,Link} from '@material-ui/core';

const ItemCategoryDetail = () => {

    const {categoryId} = useParams()
    return (
        <Card >
        <CardMedia 
          component="img"
          height="140"
          image="http://localhost:3000/tachos.png"
          alt="green iguana">
     
          </CardMedia>
        
        <CardContent>


          <Typography gutterBottom variant="h5" component="div">     
          Category {categoryId}
          </Typography>
          <Typography variant="body2" color="text.secondary">
                asdasd
          </Typography>
       
        </CardContent>
      


        
      </Card>
    )
}

export default ItemCategoryDetail
