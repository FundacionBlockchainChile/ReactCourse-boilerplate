import React from "react";
import { connect } from 'react-redux'
import { startLogin, startLoggin } from '../actions/auth'
import { NavLink } from "react-router-dom";

export const LoginPage = ({ startLogin }) => (
         <div className="box-layout">
           <div className="box-layout__box">
             <h1 className="box-layout__title">boilerplate-react-app</h1>
             <p>Tag line for app</p>
             <button className="button" onClick={startLogin}>Login with Google</button>
           </div>
         </div>
       );

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect (undefined, mapDispatchToProps)(LoginPage)