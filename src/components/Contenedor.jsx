import Navbar from "./Navbar"
import {makeStyles} from '@material-ui/core'
import { Product } from "./Product"

const styles = makeStyles(theme =>({
    root:{
        display:'flex'
    },
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow:1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
}))

const Contenedor = () => {
    const classes = styles()
   
    return (
        <div className={classes.root}>
            <Navbar/>  

            <div className={classes.content}>
                <div className={classes.toolbar}> 
                    <Product/>
                </div>
            </div>
       
        </div>
    )
}

export default Contenedor
