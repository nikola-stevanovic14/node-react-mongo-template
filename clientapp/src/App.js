import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {ROUTES} from './routes';
import Login from './pages/Login/Login';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME_PAGE} element={<Home />} />
      <Route path={ROUTES.LOGIN_PAGE} element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
