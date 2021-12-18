import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login.js";
import SinglePostPage from "./pages/singlePost/SinglePostPage.js";
import WritePost from "./pages/WritePage/WritePost";
import Register from "./pages/Register/Register";


function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">{currentUser ? <Home /> : <Register />}</Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <SinglePostPage />
        </Route>
        <Route path="/write">{currentUser ? <WritePost /> : <Login />}</Route>
        <Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
