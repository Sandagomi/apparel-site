import React,{useState} from 'react';
import SHOP_DATA from "./shop.data";
import PreviewCollection from '../../components/preview-collection/preview-collection.components'


const ShopPage = () => {

    const [collections,setCollections] = useState(SHOP_DATA)

    console.log(collections)

    return(
        <div className="shop-page">
            {
                collections.map(({id,...otherCollectionProps})=>(
                    <PreviewCollection key={id} {...otherCollectionProps}/>
                ))
            }

        </div>
    )
}

export default ShopPage