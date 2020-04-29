import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = (props) => {
  // console.log(props.match.params)
  return(
<div>
    <h1>HATS PAGE</h1>
  </div>
  );
  
  
}

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact  path="/" component={Homepage} />
        <Route  path="/hats" component={HatsPage} />
      </Switch>       
    </div>
  );
}

export default App;
