import React, { useState, useEffect } from "react";
//import data from "../data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";
//ban 1 
function SigninScreen(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin =useSelector(state => state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    const dispatch = useDispatch();

    
      useEffect(() =>{
          if(userInfo){
              props.history.push("/");
          }

        return () => {
            //
        };
      }, [props.history, userInfo]);
      const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email,password));
        
    
      }
    return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Đăng nhập</h2>
        </li>
        <li>
          {loading && <div> Loading...</div>}
          {error && <div> {error}</div>}
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
            <Link to="/shipping">
          <button type="submit" className="button primary full-width">Đăng nhập</button></Link>
          
        </li>
        <li>
          Chào bạn mới ?
        </li>
        <li>
          <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Tạo tài khoản mới</Link>
        </li>
      </ul>
    </form>
  </div>
    
}
export default SigninScreen;