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
import MainMenu from './components/layouts/MainMenu';
import ROLES from './constants/roles'
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.HOME_PAGE} element={<PrivateRoute Render={<MainMenu Component={Home}/>} roles={[]}/>} />
      <Route path={ROUTES.USER_MANAGEMENT_PAGE} element={<PrivateRoute Render={<MainMenu Component={UserManagement}/>} roles={[ROLES.ADMIN]}/>} />
      <Route path={ROUTES.LOGIN_PAGE} element={<Authentication Component={Login}/>} />
      <Route path={ROUTES.FORGOT_PASSWORRD_PAGE} element={<Authentication Component={ForgotPassword}/>}/>
      <Route path={ROUTES.REGISTER_PAGE} element={<Authentication Component={Register}/>}/>
      <Route path="*" element={<p>Not found: 404!</p>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
