import React from "react";
import "./Faq.css";
import Footer from "../footer/Footer";
import Adder from "./adder";
function Faq(props) {
  console.log(props.red)
  return (
    <div>
      <Adder/>
      <Footer/>
    </div>
  );
}

export default Faq;
