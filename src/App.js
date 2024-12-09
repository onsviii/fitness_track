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
          <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/profile" Component={Users} />
        </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;