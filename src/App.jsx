import { useState } from 'react';
import backgroundImage from './images/Faisal_Masjid_From_Damn_e_koh.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// switch import

import './App.css';

// import Navigation from './components/Navigation/Navigation'
import Navigation2 from './components/Navigation/Navigation2';
import Social_links from './components/social_links/Social_links';
import Welcome from './components/welocme_page/Welcome';
import Home from './components/Home_page/Home';
import About from './components/About_Us/About';
import Contact from './components/Contact/Contact';
import SignIn from './components/SignInUp/SignIn';
import SignUp from './components/SignInUp/SignUp';
import SearchPage from './components/SearchSuggestion/SearchPage';

function App() {
  // const [count, setCount] = useState(0)
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // or 'contain' depending on your requirement
    backgroundPosition: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: '100vh',
    width: '100vw',
    overflow: 'auto',
    padding: '0',
    margin: '0'
  }

  return (
    <div style={appStyle}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/signIn' element={<SignIn/>}></Route>
          <Route path='/signUp' element={<SignUp/>}></Route>
          <Route path="/search" element={<SearchPage/>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
