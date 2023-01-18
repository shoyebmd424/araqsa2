import axios from '../Axios/Axios';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function Logout() {
  const {state , dispatch}=useContext(UserContext);

    const navigate= useNavigate();
    useEffect(()=>{
        axios
        .get("/logout")
        .then((res) => {
          if (res.data.status !== 200) {
           console.log(res)
          } else {
            dispatch({type:'user',payload:false})
            navigate("/");
          }
        })
        .catch((err) => {
         console.log(err);
        })
    },[dispatch, navigate]);
  return (
    <div state={state}>
      This is logout
    </div>
  )
}

export default Logout;
