import {Box} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  productTitle: {
    fontSize: "3rem",
    fontWeight: 700,
    color: "#12263a",
    },
    productPrice:{
     color: '#bdbdbd', 
     fontSize: 22 
    },
    productDetail:{
      marginTop:5
    }

});

const ItemDetail = ({id,name,description,stock,category}) => {
    const classes =  useStyles()
    console.log("ItemDetail",name);
    
      return (

        <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'start',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 1,
          fontWeight: 'bold',
          padding: 10
        }}
      >
        <Box
          component="img"
          sx={{
            height: 450,
            width: 450,
             borderRadius: '12px',
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            m: 3,
            minWidth: { md: 350 },
          }}
        >
  
          <Box component="h1" className={classes.productTitle}>
            {name}
          </Box>              
          <Box component="p">
            Category: {category} .
          </Box>
         
          <Box component="span" className={classes.productPrice} >
            New price: $280,000 — Old price: $310,000
          </Box>
  
          <Box component="p" className={classes.productDetail} >
            Description: 
            {description}
          </Box>
          <Box component="p">
            Availability: {stock} en stock.
          </Box>

        </Box>
      </Box>
  
    )
}

export default ItemDetail
