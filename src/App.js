import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import './assets/vendor/animate.css/animate.min.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import NavigationBar from './NavigationBar/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/">
        
        </Route>

        <Route path="/footprint">
        
        </Route>

        <Route path="/travel">
        
        </Route>

        <Route path="/education">
        
        </Route>

        <Route path="/information/stateInformation">
        
        </Route>

        <Route path="/information/transportInformation">
        
        </Route>

        <Route path="/test">
        
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
