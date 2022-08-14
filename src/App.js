import logo from './logo.svg';
import './App.scss';
import SignUp from './pages/signup/SignUp';
import { Routes , Route , BrowserRouter} from "react-router-dom";
import SignIn from './pages/signin/SignIn';

function App() {
  return (
   <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
      </Routes>
      </BrowserRouter>
   </div>   
  )
}

export default App;
