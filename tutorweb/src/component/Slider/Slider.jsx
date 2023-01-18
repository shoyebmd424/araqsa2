import Carousel from 'react-bootstrap/Carousel';
import { HomeData } from '../../Data/HomeData/HomeData';
import SubHome from '../Home/SubHome';
function Slider(props) {
  return (
    <>
    <Carousel  fade>
      {HomeData.map((data,sliderkey)=>(
      <Carousel.Item  key={sliderkey} interval={1500} className={`p-4 p-sm-0 ${data.class}`} >
      <SubHome className={data.class}
       content={data.content}/>
      </Carousel.Item>
      ))}
    </Carousel>
   </>
  );
}
export default Slider;