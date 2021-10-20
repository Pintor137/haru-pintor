import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Button } from '@material-ui/core'
import { CardWidget } from './CardWidget'


const useStyles = makeStyles(theme =>({
    title:{
        flexGrow:1
    },
    appBar:{
        [theme.breakpoints.up('xl')]:{
            width: `calc(100% - ${240}px)`,
        }
     } 
}))

const Navbar = () => {

    const classes  = useStyles()
    return (
        <div>
            <AppBar position="fixed" color="primary" className={classes.appBar} >
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
          
        </div>
    
    )
}

export default Navbar
