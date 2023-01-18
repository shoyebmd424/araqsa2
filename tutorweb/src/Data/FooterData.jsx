import fb from "../All_image/footer-img/facebook.png";
import tw from "../All_image/footer-img/twitter.png";
import yt from "../All_image/footer-img/youtube.png";
import insta from "../All_image/footer-img/instagram.png";
import tele from "../All_image/footer-img/telegram.png";
import ln from "../All_image/footer-img/linkedin.png";
import { Link } from "react-router-dom";


export const footerData=[
    {head:"Follow us    ",
    list:[
       { li:"Refer & Earn"},
       {li:<div className="row row-cols-3 pe-4  ">
       <a className="p-1" href="https://www.facebook.com/Aqsa-106938698898333" target="_blank" rel="noreferrer"> <img data-toggle="tooltip"  data-placement="bottom" title="Facebook" className="py-2 w-100" src={fb} alt="" /></a>
       <a className="p-1" href="https://twitter.com/AqsaAqs02485070" target="_blank" rel="noreferrer"> <img data-toggle="tooltip"  data-placement="bottom" title="Twitter" className="py-2 w-100" src={tw} alt="" /></a>
       <a className="p-1" href="https://www.youtube.com/channel/UCRB5S-FyEZG_RKxo2ydij5g" target="_blank" rel="noreferrer"> <img data-toggle="tooltip"  data-placement="bottom" title="Youtube" className="py-2 w-100" src={yt} alt="" /></a>
       <a className="p-1" href="https://www.instagram.com/aqsa262123/" target="_blank" rel="noreferrer"> <img data-toggle="tooltip"  data-placement="bottom" title="Instagram" className="py-2 w-100" src={insta} alt="" /></a>
       <a className="p-1" href="https://t.me/araqsa" target="_blank" rel="noreferrer"> <img data-toggle="tooltip"  data-placement="bottom" title="Telegram" className="py-2 w-100" src={tele} alt="" /></a>
       <a className="p-1" href="https://www.linkedin.com/company/89841604/admin/" target="_blank" rel="noreferrer"> <img data-toggle="tooltip"  data-placement="bottom" title="LinkidIn" className="py-2 w-100" src={ln} alt="" /></a>
        
         </div>}
    ]},
    {head:"Company",
        list:[
            {li:<Link className="text-white" to="/about">About Us</Link>},
            {li:<Link className="text-white" to="/">Alumni Speak</Link>},
            {li:<Link className="text-white" to="/contact">Contact Us</Link>},
            
        ]
},
{head:"Work with us",
list:[
    {li:<Link className="text-white" to="/instructor">Become an instructor</Link>},
    {li:<Link className="text-white" to="/blog">Blog as guest</Link>}
]},
{head:"Discover",
list:[
    {li:<Link className="text-white" to="/discount">Araqsa Coupon & Discount </Link>}
]}
,
{
    head:"Our Courses",
    list:[
     {  li: <Link className="text-white" to="/learn/kids"> The Complete Quran Course for Kids</Link>},
     {  li: <Link className="text-white" to="/learn/kids"> The Complete Quran Course for Adults</Link>},
     {  li: <Link className="text-white" to="/learn/Tajweed">Tajweed</Link>},  
     {  li: <Link className="text-white" to="/learn/noorani">Noorani</Link>},  
     {  li: <Link className="text-white" to="/learn/quran">Quran Reading & Reciting</Link>},  
     {  li: <Link className="text-white" to="/learn/qirat">Qura'an Qirat</Link>},  
     {  li: <Link className="text-white" to="/learn/memorization">Qura'an Memorization</Link>},  
     {  li: <Link className="text-white" to="/learn/arabic">Arabic Language Course</Link>},  
     {  li: <Link className="text-white" to="/learn/tafsir">Tafseer Course</Link>},  
     {  li: <Link className="text-white" to="/learn/Ijazah">Ijazah</Link>},  
     {  li: <Link className="text-white" to="/learn/prayer">Prayer Lesson</Link>},  
     {  li: <Link className="text-white" to="/learn/studies">Islamic Studies</Link>},  
     {  li: <Link className="text-white" to="/learn/supplication">Islamic Supplication</Link>},  
        
    ]
},
{
    head:"Learn On The Go",
    list:[
      {  li: <div><i className="uil uil-android"></i> Get the Android App   </div>},
      {  li: <div><i className="uil uil-apple"></i>  Get the iOS App </div>},
    ]
}
]
