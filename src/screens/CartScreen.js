import React,{useEffect} from "react";
import data from "../data";
import { useDispatch} from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
function CartScreen(props){
 //   const cart =useSelector(state => state.cart);
  //  const {cartItems} = cart;
    const product = data.products.find(x=> x._id === props.match.params.id);
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    };
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty));
        }

    },[dispatch, productId, qty]);
    const checkoutHandler =() =>{
        props.history.push("/signin?redirect=shipping");
    }
    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3> Giỏ hàng của bạn</h3>
                    <div>
                        Giá tiền
                    </div>
                </li>
               
                     
                     <li>
                        <div className="cart-image" >
                            <img src={product.image} alt="product"/>
                            </div>
                            <div className="cart-name">
                            <div>
                    <Link to={"/product/" + product._id}>
                      {product.name}
                    </Link>

                  </div>
                                <div>
                                Số lượng:
                                <select value={product.qty} onChange={(e) => dispatch(addToCart(product._id,e.target.value))} >
                                    <option valu="1">1</option>
                                    <option valu="2">2</option>
                                    <option valu="3">3</option>
                                </select>
                                <button type="button" className="button secondary" onClick={()=>removeFromCartHandler(product._id)}>
                                    Xóa
                                </button>
                                </div>
                             
                            </div>
                        <div className="cart-price">
                            {product.price} VNĐ
                        </div>
                </li>
                     
                   
            </ul>
            

        </div>
        <div className="cart-action">
            <h3>
             Tổng cộng 1 món)
         :
             50.000 VNĐ
            </h3>
            <button onClick={checkoutHandler} className="button primary full-width" >
                Thanh Toán
            </button>
            

        </div>
    </div>
}
export default CartScreen