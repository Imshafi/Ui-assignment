import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/index';
import SignIn from './components/SignIn/index';
import Maps from './components/Maps/index';
import Footer from './components/Footer/index';
import Main from './components/Main/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Routes>
         <Route path='/signin' exact element={<SignIn/>} />
         <Route path='/maps' exact element={<Maps/>} />
      </Routes>
    </div>
  );
}

export default App;
