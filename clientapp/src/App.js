import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {ROUTES} from './routes';
import Authentication from './pages/Authentication/Authentication';
import Login from './pages/Authentication/Login';
import Home from './pages/Home';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import Register from './pages/Authentication/Register';
import PrivateRoute from './pages/PrivateRoute';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME_PAGE} element={<PrivateRoute Component={Home}/>} />
      <Route path={ROUTES.LOGIN_PAGE} element={<Authentication Component={Login}/>} />
      <Route path={ROUTES.FORGOT_PASSWORRD_PAGE} element={<Authentication Component={ForgotPassword}/>}/>
      <Route path={ROUTES.REGISTER_PAGE} element={<Authentication Component={Register}/>}/>
      <Route path="*" element={<p>Not found: 404!</p>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
