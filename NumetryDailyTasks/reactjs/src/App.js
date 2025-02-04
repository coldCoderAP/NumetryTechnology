import './App.css';
 
import ContactForm from './Components/LoginSignup/ContactForm.jsx'
 
import HomePage from './Components/LoginSignup/HomePage.jsx'
 
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx'

import NumetryWeb from './Components/LoginSignup/NumetryWeb.jsx'
 
import Gallery from './Components/LoginSignup/Feb3ImageGallery.jsx'
import TestimonialSlider from './Components/LoginSignup/Feb4DynamicTestimonial.jsx'


function App() {
  return (
    <div >   
       {/* <ContactForm/>   */}
        {/* <HomePage/> */}
       {/* <LoginSignup/> */}
       {/* <NumetryWeb/> */}
       {/* {<Gallery/>} */}
       <TestimonialSlider/>
    </div>
  );
}

export default App;
