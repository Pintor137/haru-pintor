import Navbar from "./Navbar"
import {makeStyles} from '@material-ui/core'
import { ItemListenerContainer } from "./ItemListenerContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Item from "./layouts/Item";
import Category from "./layouts/Category";
import ProductList from "./product/ProductList";

const styles = makeStyles(theme =>({
    root:{
        display:'flex'
    },
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow:1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(4),
    },navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
      },
     logo: {
        flexGrow: "1",
        cursor: "pointer",
      },
      link: {
        textDecoration: "none",
        lineHeight:"3rem",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(8),
        "&:hover": {
          color: "yellow"
        },
      },
}))

const Contenedor = () => {
    const classes = styles()
   
    return (
       
        <div className={classes.root}>
            <Router>
            <Navbar/>
                <div className={classes.content}>
                    <div className={classes.toolbar}> </div>
                    <Switch>
                        <Route exact path="/" component={ProductList}/>
                        <Route path="/item/:itemId" component={Item}/>
                        <Route path="/category">
                            <h4>Todas las categroias</h4>
                        </Route>
                        <Route path="/cart">
                    
                        <h4>Card</h4>
                        </Route>
    
                    </Switch>
                </div> 
            </Router>
        </div>
      
    )
}

export default Contenedor
