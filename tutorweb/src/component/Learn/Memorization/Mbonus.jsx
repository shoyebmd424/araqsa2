import React from "react";
import img from "../../../All_image/Course images/bonus.jpg";
function Mbonus() {
  return (
    <div className="bg-white mt-5 p-3">
      <h1 className="text-center text-primary mb-3">Free Bonus Course with The Quran Memorization Course</h1>
      <div className=" row row-cols-md-3 m-auto px-md-5"> 
        <div className="d-flex flex-column justify-content-between">
          <div className="mt-3 mt-md-0">
            <p>
              Islamic Studies Course at Araqsa helps Muslims to know all
              essentials about their religion.
            </p>
          </div>
          <div className="mt-3 mt-md-0">
            <p>
              Islam is not only a religion but it is a beatifull way of living
              life. We have guidance on how to live life.
            </p>
          </div>
          <div className="mt-3 mt-md-0">
            <p>
              Every muslim should know Quran Surah by-heart to complete Namaz.
              We will provide 15 surah Hifz to your child.
            </p>
          </div>
        </div>
        <div className="order-1 order-md-0">
          <img src={img} alt="load"  className="col-12"/>
        </div>
        <div className="d-flex flex-column justify-content-evenly">
        <div className="mt-3 mt-md-0">
            <p>
              There are five prayers in a day and Jummah prayer every Friday. It
              is called namaz & second pillar of Islam.
            </p>
          </div>
          <div className="mt-3 mt-md-0">
            <p>
              Daily Supplication is necessary for every Muslim & especially for
              our kids. We will teach your kids Daily Supplication & Tasbeeh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mbonus;
