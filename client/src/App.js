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
import Blog from './pages/Blog/BlogPage'
import Authentication from "./pages/Authentication/AuthenticationPage";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Router>
        {currentUser ? (
          <Container className="page-container">
            <NaviBar />
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/workouts" exact Component={Workouts} />
              <Route path="/blog" exact Component={Blog} />
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