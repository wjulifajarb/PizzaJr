import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/mainViews/Home.jsx';
import Order from './components/mainViews/Order.jsx';
import BuyCar  from './components/BuyCar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Menu" component={BuyCar}/>
        <Route exact path="/Orden" component={Order} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
