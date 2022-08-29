import "./App.scss";
import SignUp from './pages/signup/SignUp';
import { Routes , Route , BrowserRouter} from "react-router-dom";
import SignIn from './pages/signin/SignIn';
import OnePassCreator from './pages/AccMaking/OnePassCreator';
import TwoChoosePlan from "./pages/AccMaking/TwoChoosePlan";
import ThreePackageChooser from "./pages/AccMaking/ThreePackageChooser";
import FourPaymentMaker from "./pages/AccMaking/FourPaymentMaker";
import FiveAccountInformation from "./pages/AccMaking/FiveAccountInformation";
import { MainScreen } from "./pages/MainScreen/MainScreen";

function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
          {/* Outside */}
          <Route path="/" exact element={<SignIn/>}></Route>

        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/passwordCreator' element={<OnePassCreator/>}></Route>
        <Route path="/passwordCreater/choosePlan" element={<TwoChoosePlan/>}></Route>
        <Route path="/passwordCreater/choosePlan/selectSubscription" element={<ThreePackageChooser />}></Route>
        <Route path="/paymentMaker" element={<FourPaymentMaker />}></Route>
        <Route path="/accountDetail" element={<FiveAccountInformation />}></Route>
          
         {/*Inner*/}
        <Route path="/home" element={<MainScreen/>}></Route> 
      </Routes>
      </BrowserRouter>
   </div>   
  )
}

export default App;
