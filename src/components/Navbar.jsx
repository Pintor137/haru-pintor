import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Button } from '@material-ui/core'
import { CardWidget } from './CardWidget'



import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
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
  }));

const Navbar = () => {

    const classes  = useStyles()
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar} >
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Haru Pintor
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/category" className={classes.link}>
                        Category
                    </Link>
                  
                    <Link to="/cart" className={classes.link}>
                        <CardWidget/>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
