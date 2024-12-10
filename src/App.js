import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import "./index.css"

import Footer from "./components/Footer/Footer"
import NaviBar from './components/NaviBar/NaviBar';

import Home from './pages/Home';
import Users from './pages/Users';
import Authentication from "./pages/Authentication";

function App() {
  //const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Router>
        {false ? (
          <Container>
            <NaviBar />
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/profile" Component={Users} />
            </Routes>
            <Footer />
          </Container>
        ) : (
          <Container className="page-container">
            <Authentication />
          </Container>
        )}
      </Router>
    </>
  );
}

export default App;