import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { products } from '../../data/product';
import { promises } from "../promises/promiseProduct";
import ItemDetail from './ItemDetail';
const ItemDetailContainer = () => {

    const {itemId} = useParams()
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);
    const [currentProduct,setCurrentProduct] = useState([]);
    const [myProdcut, SetMyProduct] = useState([]);

    useEffect(() => {
        if (products) {
          promises(
            products,
            setMessage,
            setIsSuccess,
            setIsLoading,
            setIsFinished,
            setCurrentProduct
          );

          const mypro = products.filter(itemm=> itemm.id == itemId)[0];
          SetMyProduct(mypro);  
          console.log("haol")
        }
      }, [products]);

      

    return (
        <div>
            <ItemDetail {...myProdcut}/>
        </div>
    )
}

export default ItemDetailContainer
