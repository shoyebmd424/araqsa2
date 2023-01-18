import './App.css';
import Navbar from './component/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Contact from './component/Contact/Contact';
import Connector from './component/Connector';
import Learn from './component/Learn/Norani/Learn';
import Faq from './component/FAQs/Faq';
import { Link } from 'react-scroll';
import KidsAll from './component/Learn/KidAndAdult/kidsAll';
import Memorization from './component/Learn/Memorization/Memorization';
import QuranReadingAll from './component/Learn/QuranReading/QuranReadingAll';
import TajweedAll from './component/Learn/Tajweed/TajweedAll';
import ArabicAll from './component/Learn/ArabicLanguage/ArabicAll';
import Privacyhome from './component/Privacy/Privacyhome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivacyAndPolicy from './component/Privacy/PrivacyAndPolicy';
import { TmAcdata } from './Data/PrivacyData/Terms&ConditionData';
import { PrivacyAndPolicydata } from './Data/PrivacyData/Pravacydata';
import { RefundData } from './Data/PrivacyData/RefundData';
import { DisclaimerData } from './Data/PrivacyData/DisclaimerData';
import About from './component/About/About';
import Login from './Login/Login';
import Register from './Login/Register';
import Forget from './Login/Forget';
import Dashboard from './component/Dashboard/Dashboard';
import Profile from './component/Dashboard/Profile.jsx/Profile';
import Welcome from './component/Dashboard/Welcome';
import Courses from './component/Dashboard/Courses/Courses';
import Buy from './component/Dashboard/Courses/Buy';
import ShowCourse from './component/Dashboard/Courses/ShowCourse';
import Logout from './Login/Logout';
import { createContext } from 'react';
import { useReducer } from 'react';
import { initialState, reducer } from './Reducer/UseReducer';
import SetPassword from './Login/SetPassword';
import Book from './Book/Book';
import Upcomming from './component/Learn/Upcomming/Upcomming';
import Error from './Error/Error';
import Eventt from './component/About/Eventt';
import Success from './component/About/Success';
import Blog from './component/About/Blog/Blog';
import StudisAll from './component/Learn/Studies/StudisAll';
import Prayer from './component/Learn/Prayer/Prayer';
import Supplication from './component/Learn/Supplication/Supplication';


 export const UserContext=createContext();

function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (<>  
      <BrowserRouter>
      <UserContext.Provider value={{state,dispatch}}>
    <Navbar />
    <div className="App bg-light" id='htop'>
      <Routes>
        {/* <Route path='/' element={<Connector/>}/> */}
        <Route exact path='/' element={<Connector/>}/>
       
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/faq' element={<Faq/>}/>
      <Route exact path='/book' element={<Book/>}/>
      <Route exact path='/event' element={<Eventt/>}/>
      <Route exact path='/success' element={<Success/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/learn/noorani' element={<Learn/>}/>
      <Route exact path='/learn/kids' element={<KidsAll/>}/>
      <Route exact path='/learn/memorization' element={<Memorization/>}/>
      <Route exact path='/learn/quran' element={<QuranReadingAll/>}/>
      <Route exact path='/learn/tajweed' element={<TajweedAll/>}/>
      <Route exact path='/learn/arabic' element={<ArabicAll/>}/>
      <Route exact path='/learn/tafsir' element={<Upcomming/>}/>
      <Route exact path='/learn/ijazah' element={<Upcomming/>}/>
      <Route exact path='/learn/supplication' element={<Supplication/>}/>
      <Route exact path='/learn/prayer' element={<Prayer/>}/>
      <Route exact path='/learn/studies' element={<StudisAll/>}/>
{/*Privacy  */}
      <Route  path='/contact/privacy/' element={<Privacyhome/>}>
        <Route path='term-condition' element={<PrivacyAndPolicy header="Terms and Conditions" content={TmAcdata}/>}/>
        <Route path='' element={<PrivacyAndPolicy header="Terms and Conditions" content={TmAcdata}/>}/>
        <Route path='policy' element={<PrivacyAndPolicy header="Privacy & Policy" content={PrivacyAndPolicydata}/>}/>
        <Route path='refund-policy' element={<PrivacyAndPolicy header="REFUND POLICY" content={RefundData}/>}/>
        <Route path='disclaimer' element={ <PrivacyAndPolicy header="Disclaimer" content={DisclaimerData}/>}/>
      </Route>
      {/* about */}
      <Route exact path='/about' element={<About/>}/>
{/* Auth */}
      <Route exact path='/login' element={<Login />}/>
      <Route exact path='/signup' element={<Register/>}/>
      <Route exact path='/forget' element={<Forget title="Forget Password"/>}/>
      <Route exact path='/change-password' element={<SetPassword title="Change Password"/>}/>
      <Route exact path='/logout' element={<Logout />}/>
      {/* Dashboard */}
      <Route exact path='/dashboard/' element={<Dashboard/>}>
      <Route path='' element={<Welcome/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='buy-courses' element={<Courses/>}/>
      <Route path='courses' element={<ShowCourse/>}/>
      <Route path='buy' element={<Buy/>}/>
      <Route exact path='change-password' element={<Forget title="Change Pashword"/>}/>
      </Route>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
      </UserContext.Provider>
      </BrowserRouter>
    <Link
       to="htop"
       spy={true}
       smooth={true}
       duration={300} > <div className='top-scroll text-center d-flex flex-column'><i className="uil uil-arrow-circle-up"></i> </div></Link>
    </>

  );
}
export default App;
