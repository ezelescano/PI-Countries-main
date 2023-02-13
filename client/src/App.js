import './App.css';
import {Route, useLocation} from "react-router-dom";
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import NavBar from "./component/NavBar/NavBar";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/detail" component={Detail}/>
      <Route exact path="/create" component={Form}/>
    </div>
  );
}

export default App;
