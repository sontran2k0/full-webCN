/* eslint-disable no-undef */
import React from 'react';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import data from "../data";
import CheckoutSteps from '../components/CheckoutSteps';
import Popup from 'reactjs-popup'
//import { createOrder } from '../actions/orderActions';
function PlaceOrderScreen(props) {
    

   // const product = data.products.find(x=> x._id === props.match.params.id);
  const cart = useSelector(state => state.cart);
 // const orderCreate = useSelector(state => state.orderCreate);
  //const { success, error, order } = orderCreate;

  const {  shipping, payment } = cart;
  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }
  //const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  //const shippingPrice = itemsPrice > 100 ? 0 : 10;
  //const taxPrice = 0.15 * itemsPrice;
  //const totalPrice = itemsPrice + shippingPrice + taxPrice;

  //const dispatch = useDispatch();

  

  return <div>
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3>
            Giao hàng
          </h3>
          <div>
          {cart.shipping.name}, {cart.shipping.phone},
            {cart.shipping.address}, {cart.shipping.city},
          {cart.shipping.postalCode}, {cart.shipping.country},
          </div>
        </div>
        <div>
          <h3>Thanh toán</h3>
          <div>
            Phương thức thanh toán: {cart.payment.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3>
                Giỏ hàng
          </h3>
              <div>
                Giá tiền
          </div>
            </li>
            
             
              
                
               
                  <li>
                    <div className="cart-image">
                      <img src="/images/t2.png" alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/1" }>
                          Trà sữa trân châu
                        </Link>

                      </div>
                      <div>
                        Số lượng: 1
                      </div>
                    </div>
                    <div className="cart-price">
                      50.000 VNĐ
                    </div>
                  </li>
                
            
          </ul>
        </div>

      
      </div>
      <div className="placeorder-action">
        <ul>
          <li>
          <Popup modal trigger={<button className="button primary full-width">ĐẶT HÀNG NGAY</button>}>
            <div className="form-container2">
        <h2 className="tb">Thông báo</h2>
        <p className="cont">Đơn hàng của quý khách đã đặt thành công, chúng tôi sẽ liên hệ để xác nhận</p>
        <Link to="/">
        <button className="button primary full-width ">OK</button>
        </Link>
        </div>
      </Popup>
            
          </li>
          <li>
            <h3>Tổng thanh toán</h3>
          </li>
          <li>
            <div>Sản phẩm</div>
            <div>50.000 VNĐ</div>
          </li>
          <li>
            <div>Phí ship</div>
            <div>10.000 VNĐ</div>
          </li>
          <li>
            <div>TGTGT</div>
            <div>5.000 VNĐ</div>
          </li>
          <li>
            <div>Thành tiền</div>
            <div>65.000 VNĐ</div>
          </li>
        </ul>



      </div>

    </div>
  </div>

}

export default PlaceOrderScreen;