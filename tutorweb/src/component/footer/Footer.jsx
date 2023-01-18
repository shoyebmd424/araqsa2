import React from "react";
import { footerData } from "../../Data/FooterData";
import "./Footer.css";
import Subfooter from "./Subfooter";
function Footer() {
  return (
    <div id="about" className="footer bg-black pt-4">
    
      <div className="row row-cols-md-6 row-cols-sm-3 row-cols-2  ps-md-4">
        {footerData.map((data,fkey)=>(
        <div  key={fkey} className="mt-3 mt-md-0 px-3 ">
          <h4>{data.head}</h4>
          <div >
          {data.list.map((item,findex)=>(
          <div key={findex}>{item.li}</div>
          ))}
          </div>
        </div>
        ))}
        
      </div>
      <Subfooter/>
      <svg
        className="wave"
        xmlns="http://www.w3.org/600/svg"
        viewBox="0 0 1240 260"
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,128L48,154.7C96,181,192,235,288,213.3C384,192,480,96,576,96C672,96,768,192,864,218.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Footer;
