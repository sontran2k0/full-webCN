import React, {  useState } from 'react';
//import { Link } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen(props) {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country,name,phone }));
    props.history.push('payment');
  }
  return <div>
    <CheckoutSteps step1 step2 ></CheckoutSteps>
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Giao hàng</h2>
          </li>
          <li>
            <label htmlFor="name">
              Tên khách hàng
          </label>
            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>
            </input>
          </li>

          <li>
          <label htmlFor="name">
              Số điện thoại
          </label>
            <input type="phone" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)}>
            </input>
          </li>

          <li>
            <label htmlFor="address">
              Địa chỉ
          </label>
            <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>
            </input>
          </li>

          <li>
            <label htmlFor="city">
              Thành phố
          </label>
            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="postalCode">
              Postal Code
          </label>
            <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="country">
              Country
          </label>
            <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
            </input>
          </li>


          <li>
            <button type="submit" className="button primary">Tiếp tục</button>
          </li>

        </ul>
      </form>
    </div>
  </div>

}
export default ShippingScreen;