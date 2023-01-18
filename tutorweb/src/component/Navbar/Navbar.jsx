import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Aboutdropdown, Complementry, Regular } from "../../Data/NavbarData";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
function Navbar() {
  const {state,dispatch}=useContext(UserContext);
    const [open, setopen]=useState(false);
    const Auth=()=>{
      if(!state){
        return (
          <>
           <NavLink 
                  to="/login"
                  className={"btn nav-btn trial btn-outline-light "+dispatch}
                >
                  <b> Login</b>
                </NavLink>
                
          </>
        )
      }else{
        return (<>
        <NavLink
          to="/logout" 
          className={"btn nav-btn trial btn-outline-light"}
        >
          <b> Logout</b>
        </NavLink>
        </>
        )
      }
    }
  return (
    <div  className=" sticky-top ">
      <div className="row ">
        <div style={{backgroundColor:"#1515ad"}} className="col-12  shadow ">
          <nav className=" navbar  px-3">
            <NavLink to="/" className="text-white"> <h1> ArAqsa</h1></NavLink>
            <i  onClick={()=>(setopen(!open))} className="uil toggle uil-align-justify"></i>
            <ul className= {`${open===true?" line-content":"close m-0  line-content"}`} >
            <i onClick={()=>(setopen(!open))}  className={open?"uil toggle uil-multiply text-white":"d-none"} style={{zIndex:"5",position:"absolute",left:"12rem"}}/>
            <NavLink to="/" className="text-white toggle pt-5  "> <h1 className="d-flex"> <i className="bi pe-3 bi-house-door-fill toggle"/> ArAqsa</h1></NavLink>
            <span className="toggle col-12 border mt-2 border-2 text-white "/>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
             
              <li
                className=" dropdownn"
                style={{ fontWeight: "500" }}
              >
              About Us
                <i className="uil drop uil-angle-down"></i>

                <ul  className="dropdown-menubar rounded bg-primary">
                
                  {Aboutdropdown.map((data,n)=>(
                  <NavLink key={n} to={data.path} className=" ms-0 rounded text-white"> <li   className="border-bottom about-li  d-flex justify-content-between text-capitalize">
                        {data.name}
                     <i className="uil down uil-angle-right"></i>
                      </li></NavLink>
                      ))}
                </ul>
              </li>

              <li
                className=" dropdownn " 
                style={{ fontWeight: "500" }}
              >
              Our Courses
                <i className="uil drop uil-angle-up"></i>

                <ul  className="dropdown-menubar   rounded bg-primary">
                  <div className="row  row-cols-md-2">
                    <div className="regulor p-5">
                      <h3 className="text-uppercase">Regular Courses</h3>
                     {Regular.map((data,o)=>( <li  className="sub-dropdown text-capitalize">
                      < span key={o} className="list">{data.list}</span><i className="uil down uil-angle-down"></i>
                        <NavLink className="sublist ms-5 rounded text-white" to={data.path}>
                          {data.anker}
                        </NavLink>
                      </li>
                      ))}
                    </div>
                    <div className="complementry p-4" style={{borderLeft:"1px solid white"}}>
                      <h3 className="text-uppercase">Complementary Courses</h3>
                     {Complementry.map((data,complementry)=>( <li className="sub-dropdown  text-capitalize">
                       {data.list}<i key={complementry}  className="uil down uil-angle-down"></i>
                      <NavLink className="sublist ms-5 rounded text-white" to={data.path}>
                          {data.anker}
                        </NavLink>
                      </li>
                      ))}
                    </div>
                  </div>
                </ul>
              </li>
              <li>
                <NavLink to="/faq"> FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact Us</NavLink>
              </li>
              <div className="d-flex btns align-items-xl-center" >
              <span  data-toggle="tooltip" data-placement="top" title="Whatsapp">
                <a
                  href="https://wa.me/919871904481"
                  className="  "
                  type="submit"
                  >
                 <i style={{fontSize:"55px"}} className="uil text-white pe-4 uil-whatsapp-alt"></i>
                </a>
                </span>
             <div>  <Auth/></div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
