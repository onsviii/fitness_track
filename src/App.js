import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Footer from "./components/Footer"
import NaviBar from './components/NaviBar';
import { Home } from './Home';
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
        <Route path="/home" component={Home} />
        <Route path="/auth" component={Auth} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
