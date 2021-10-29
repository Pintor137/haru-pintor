import React from 'react'
import ItemCategoryDetail from './ItemCategoryDetail'
import {useParams} from 'react-router-dom'

const Category = () => {
    const {categoryId} = useParams()
    return (
        <div>

        
            <Grid container spacing={4}>
           
                <Grid item xs={12} sm={6} md={3}>    
                 <ItemCategoryDetail id={categoryId}/>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>    
                 <ItemCategoryDetail id={categoryId}/>
                </Grid>
           
             </Grid>
   
           
        </div>
    )
}

export default Category
