import { BrowserRouter, Route, Routes ,} from "react-router-dom";
import { Header } from "./component/molcules/header/Header";
import { About } from "./component/pages/about/About";
import { Home } from "./component/pages/Home";
import Router from "./router/Router";


function App() {
  return (
   <BrowserRouter>


   <Router />
   
   </BrowserRouter>

  );
}

export default App;
