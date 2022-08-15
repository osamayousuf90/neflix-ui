import logo from './logo.svg';
import "./App.scss";
import SignUp from './pages/signup/SignUp';
import { Routes , Route , BrowserRouter} from "react-router-dom";
import SignIn from './pages/signin/SignIn';
import OnePassCreator from './pages/AccMaking/OnePassCreator';

function App() {
  return (
   <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path='/passwordCreator' element={<OnePassCreator/>}></Route>
      </Routes>
      </BrowserRouter>
   </div>   
  )
}

export default App;
