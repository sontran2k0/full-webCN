import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
//import data from "../data";
import {useDispatch, useSelector} from 'react-redux';
import {listProducts} from '../actions/productActions';
import data from "../data";
function HomeScreen(props){


const productList = useSelector(state => state.productList);
const { loading,}= productList;
const dispatch =useDispatch();

useEffect(() => {
    dispatch(listProducts());
    return () => {
        //
    };
}, [dispatch])
    
    return loading ? <div>Loading...</div>:
    <><img className="banner" src="/images/banner.jpg" alt="logo" /><ul className="products">
            {data.products.map((product) => <li key={product._id}>
                <div className="product">
                    <Link to={'/product/' + product._id}>
                        <img className="product-image" src={product.image} alt="product" />
                    </Link>

                    <div className="product-name">
                        <Link to={'/product/' + product._id}>{product.name}</Link></div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price} VND</div>
                    <div className="product-rating">{product.rating} Sao</div>
                </div>
            </li>
            )}







        </ul></>
}
export default HomeScreen;