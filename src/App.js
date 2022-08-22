import "./App.scss";
import SignUp from './pages/signup/SignUp';
import { Routes , Route , BrowserRouter} from "react-router-dom";
import SignIn from './pages/signin/SignIn';
import OnePassCreator from './pages/AccMaking/OnePassCreator';
import TwoChoosePlan from "./pages/AccMaking/TwoChoosePlan";
import ThreePackageChooser from "./pages/AccMaking/ThreePackageChooser";

function App() {
  return (
   <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path='/passwordCreator' element={<OnePassCreator/>}></Route>
        <Route path="/passwordCreater/choosePlan" element={<TwoChoosePlan/>}></Route>
        <Route path="/passwordCreater/choosePlan/selectSubscription" element={<ThreePackageChooser/>} ></Route>
      </Routes>
      </BrowserRouter>
   </div>   
  )
}

export default App;
