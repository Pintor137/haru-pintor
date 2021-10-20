import {Box} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    containerBox: {
        padding:'1px',
        margin: '0px 1em',
        borderRadius:'5px',
        border:'1px solid #c3bebe',
        display:'flex',  
        justifyContent:'space-around'
    },
    childBox:{
        color:'white',
        lineHeight:2.5
    },
    itemCant:{
        color:'blue',
        lineHeight:"2.8rem",
        padding:'0px'
    },
    addCart:{
        display:'flex', 
        justifyContent:'center',
        margin: '5px .5rem',
        letterSpacing: '0px',
        fontSize:' 10px',
        fontWeight: 600,
    },
    iconButon:{
        padding:'0px',
        color:"#86868e"
    }

  });





function Item(props) {
const { sx, ...other } = props;
return (
    <Box

    
    sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',

        ...sx,
    }}
    {...other}
    />
);
}

const ItemCounter = (props) => {
    const classes = useStyles()
    const [count, setCount] = React.useState(1);
    const [status, setStatus] = React.useState(false);

    const plusCount = ()=>{
        if(count == props.stock){
            return false;
        }

        setCount(count + 1);
        setStatus(false)
    }

    const minusCount = ()=>{

        if(count == 1){
            setStatus(true)
            return false;
        }
        setCount(count - 1);
    }


    return (
        <div>
            <Box  className={classes.containerBox} >
               
                <IconButton size="large"className={classes.iconButon}  onClick={ minusCount } >
                 <RemoveIcon/>  
                </IconButton>
                    {count}
                <IconButton size="large" className={classes.iconButon} onClick={ plusCount }>
                 <AddIcon />  
                </IconButton>
              
            </Box>

            <Box className={classes.addCart} >
                

                <Button fullWidth={true}  className={classes.addCart} variant="contained"  endIcon={<ShoppingCartIcon />}>
                        Add to Cart
                </Button>
               
            </Box>


           {/* <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',marginX:1 }}>
                <Item >  
                   1
                </Item>
                <Item>2</Item>
                <Item>3</Item>
                
            </Box>

            <Box sx={{ display: 'flex',marginX:1 }}>
                <Item >  
                   1
                </Item>
                <Item>2</Item>
                <Item>3</Item>
                
            </Box>
    
    
         
    */}
            
            
        </div>
            
                    
    )
}

export default ItemCounter
