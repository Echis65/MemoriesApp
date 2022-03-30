
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "@material-ui/core"
/* import memories from "./Images/memories.png" */
import Home from './components/Home/Home.jsx';
import Auth from './components/Auth/Auth.jsx';
import Navbar from './components/Navbar/Navbar.jsx';




function App()
{


  return (
    <BrowserRouter>
    <Container maxWidth="lg">
    <Navbar />
      <Routes>
        <Route path='/auth'  element={<Auth />}/>
        <Route path='/'  element={<Home />}/>
      </Routes>
      </Container>
      </BrowserRouter>
    
    
  );
}

export default App;
