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

import Home from './pages/Home/HomePage';
import Workouts from './pages/Workouts/WorkoutsPage'
import Authentication from "./pages/Authentication/AuthenticationPage";

function App() {
  const { currentUser } = true;

  return (
    <>
      <Router>
        {currentUser ? (
          <Container className="page-container">
            <NaviBar />
            <Routes>
              <Route path="/auth" Component={Authentication} />
              <Route path="/" exact Component={Home} />
              <Route path="/workouts" exact Component={Workouts} />
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