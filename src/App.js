import React from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import XyChart from "./components/XyChart";
import PieChart from "./components/PieChart";
import RadarChart from "./components/RadarChart";
import Summary from "./components/Summary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Summary />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/xychart" component={XyChart} />
          <Route exact path="/piechart" component={PieChart} />
          <Route exact path="/radarchart" component={RadarChart} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
