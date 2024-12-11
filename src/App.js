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

import Home from './pages/Home/Home';
import Workouts from './pages/Workouts/Workouts'
import Users from './pages/Users/Users';
import Authentication from "./pages/Authentication/Authentication";

function App() {
  //const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Router>
        {true ? (
          <Container className="page-container">
            <NaviBar />
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/workouts" exact Component={Workouts} />
              <Route path="/profile" Component={Users} />
            </Routes>
            <Footer />
          </Container>
        ) : (
          <Container className="auth-container">
            <Authentication />
          </Container>
        )}
      </Router>
    </>
  );
}

export default App;