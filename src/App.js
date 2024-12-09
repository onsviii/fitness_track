import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import Footer from "./components/Footer"
import NaviBar from './components/NaviBar';

import { Home } from './Home';
import { Users } from './Users';
import Auth from "./AuthPage";

function App() {
  return (
    <>
    <Router>
      <div className="wrapper">
        <NaviBar />
        <Footer />
      </div>
      <Routes>
        <Route exact path="/home" element={Home} />
        <Route path="/profile" element={Users} />
      </Routes>
    </Router>
    </>
  );
}

export default App;