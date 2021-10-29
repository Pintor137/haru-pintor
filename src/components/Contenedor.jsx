import Navbar from "./Navbar"
import {makeStyles} from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./details/ItemDetailContainer";
import ItemListContainer from "./product/ItemListContainer";
import ItemCategoryDetail from "./layouts/ItemCategoryDetail";


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
                        <Route exact path="/" component={ItemListContainer}/>
                        <Route path="/item/:itemId" component={ItemDetailContainer}/>
                        <Route exact path="/category">
                            <h4>Todas las categroias</h4>
                        </Route>
                        <Route path="/category/:categoryId" component={ItemCategoryDetail}/>
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
