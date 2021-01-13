import React, {useState, createContext} from 'react';
import tree from './tree'

export const ProductContext = createContext();


export const ProductProvider = (props) => {
    const [products, setProducts] = useState(tree)
    return (
        <ProductContext.Provider value={[products, setProducts]}>{props.children}</ProductContext.Provider>
    )
}