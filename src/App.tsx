import React from "react";
import { HashRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/MainPage";
import { Provider } from "react-redux";
import { Header } from "./components/Header/Header";
import { store } from "./store/store";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App_container">
          <Header />
          <Redirect from="/" to="/MainPage" />
          <Route exact path="/MainPage" component={MainPage} />
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
