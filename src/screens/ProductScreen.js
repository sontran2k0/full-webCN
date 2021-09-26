import React, { useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";
//ban 1 
function ProductScreen(props){
    console.log(props.match.params.id);
    const [qty] = useState(1);
    
    const product = data.products.find(x=> x._id === props.match.params.id);
    const handleAddToCart = () => {
        props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
      };
    return <div >
        <div className="back-to-result">
            <Link to="/">Trở về trang sản phẩm</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Sao
                    </li>
                    <li>
                        <b>{product.price} VNĐ</b>
                    </li>
                    <li>
                        Mô tả:
                        <div>
                            {product.description}
                        <img src={product.tt} alt="product"></img>
                        </div>
                    </li>

                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Giá tiền: {product.price} VNĐ
                    </li>
                    <li>
                        Trạng thái: {product.status}
                    </li>
                    <li>
                        Size:<select>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </li>
                    <li>
                        <button onClick={handleAddToCart} className="button">Thêm vào túi</button>
                    </li>
                </ul>
            </div>
            
        </div>     
    </div>
    
}
export default ProductScreen;