import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Step from "./component/step";
import CarouselContainer from "./component/ac";
import Predict from "./component/predict";
import PredictCIH from "./component/predictCIH";
import PredictBP from "./component/predictBP";
import { FooterContainer } from "./containers/footer";
import Contenu from "./component/contenu";
import Auth from "./component/login";
import Admin from "./component/visualisation/admin"
import Powerbi from "./component/visualisation/powerbi"
import "./App.css";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from 'powerbi-client'


function App() {


  return (
    <Router>
      <Switch>
      <Route exact path="/login">
             <Auth/>
        </Route>
     
        <Route exact path="/">
          <Navbar />
          <CarouselContainer />
          <Step />
          <Contenu/>
          <FooterContainer />
        </Route>
        <Route exact path="/Home">
          <Navbar />
          <CarouselContainer />
          <Step />
          <Contenu/>
          <FooterContainer />
        </Route>
        <Route exact path="/predict">
              <Navbar />
              <Predict/>
        </Route>
        <Route exact path="/predictCIH">
              <Navbar />
              <PredictCIH/>
        </Route>
        <Route exact path="/predictBP">
              <Navbar />
              <PredictBP/>
        </Route>
        <Route exact path="/vadmin">
              <Navbar />
              <Admin/>
        </Route>

        <Route exact path="/powerbi">
          <Powerbi/>
        </Route>
       
      </Switch>
    </Router>
   
    
  );
}

export default App;
