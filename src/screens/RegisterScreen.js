import React, { useState, useEffect } from "react";
//import data from "../data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register} from "../actions/userActions";
//ban 1 
function RegisterScreen(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister =useSelector(state => state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    const dispatch = useDispatch();

    
      useEffect(() =>{
          if(userInfo){
              props.history.push(redirect);
          }

        return () => {
            //
        };
      }, [props.history, redirect, userInfo]);
      const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name,email,password,rePassword));
        
    
      }
    return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Tạo tài khoản</h2>
        </li>
        <li>
          {loading && <div> Loading...</div>}
          {error && <div> {error}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Tên của bạn
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        
        <li>
          <label htmlFor="repassword">Nhập lại Password</label>
          <input type="password" id="repassword" name="repassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Đăng nhập</button>
        </li>
        <li>
          Bạn đã có tài khoản ? <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}>Đăng nhập</Link>
        </li>
        
      </ul>
    </form>
  </div>
    
}
export default RegisterScreen;