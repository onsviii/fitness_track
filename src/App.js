import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Container from 'react-bootstrap/Container';

import Footer from "./components/Footer"
import NaviBar from './components/NaviBar';

import Home from './pages/Home';
import Users from './pages/Users';
import Authentication from "./pages/Authentication";

function App() {
  //const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Router>
        {false ? (
          <Container className='wrapper'>
            <NaviBar />
            <Routes>
              <Route path="/home" Component={Home} />
              <Route path="/profile" Component={Users} />
            </Routes>
            <Footer />
          </Container>
        ) : (
          <Container className='wrapper'>
            <Authentication />
          </Container>
        )}
      </Router>
    </>
  );
}

export default App;