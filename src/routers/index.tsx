import React from "react";
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";
import Login from "../views/login/Login";
import NewsSandBox from "../views/sandbox/NewsSandBox";
export default function IndexRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" render={() => {
          const token =localStorage.getItem("token")
          return !token ? <NewsSandBox/> :<Redirect to="/login"/>
        }}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
