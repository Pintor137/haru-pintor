import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, makeStyles, Button } from '@material-ui/core'
import { CardWidget } from './CardWidget'


const useStyles = makeStyles(theme =>({
    offset:theme.mixins.toolbar,
    title:{
        flexGrow:1
    } 
}))

const Navbar = () => {

    const classes  = useStyles()
    return (
  
        <AppBar position="fixed" color="primary" >
            <Toolbar>
              
                <Typography variant="h6" className={classes.title}>
                    Haru Pintor
                </Typography>
                <Button variant="text" color="inherit" >
                    Home
                </Button>
                <Button variant="text" color="inherit" >
                    Categorias
                </Button>
                <Button variant="text" color="inherit" >
                    Más vendidos
                </Button>
                
                <CardWidget/>

            </Toolbar>
        </AppBar>
    
    )
}

export default Navbar
