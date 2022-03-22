
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "@material-ui/core"
/* import memories from "./Images/memories.png" */
import Home from './components/Home/Home.jsx';
import Auth from './components/Auth/Auth.jsx';
import Navbar from './components/Navbar/Navbar.jsx';




function App()
{


  return (
    <Container maxWidth="lg">
      <BrowserRouter>
      <Routes>
        <Route path='/' exact component={Home}/>
        <Route path='/auth' exact component={Auth}/>
      </Routes>
      </BrowserRouter>
     <Navbar />
      <Home />
    </Container>
  );
}

export default App;
