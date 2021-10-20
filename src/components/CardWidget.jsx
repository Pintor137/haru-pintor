
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton} from '@material-ui/core'
import Badge from '@material-ui/core/Badge'
export const CardWidget = () => {
    return (
        <>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    )
}


