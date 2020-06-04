import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <AppContainer className="App">
      <Router>
        <Switch>
          <Route path="/detail">
            <Header bgColor="neutral" />
            <Detail />
          </Route>
          <Route path="/">
            <Header bgColor="blue" />
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  overflow: hidden;
`;

export default App;
