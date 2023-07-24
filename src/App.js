//import logo from './logo.svg';
import './App.css'; 
 import Navbar from './Components/Navbar/Navbar';
 import Signup from './Components/Signup/Signup';
 import Connect from './Components/Connect/Connect';
import Homepage from './Pages/Homepage/Homepage';
 //import Informantion from './Components/Informantion/Informantion';
 //import Productpage from './Pages/Productpage/Productpage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Signup/>
      <Connect/>
       {/*<Informantion/> 
     <ProductDetail/>*/}
    </div>
  );
}

export default App;
