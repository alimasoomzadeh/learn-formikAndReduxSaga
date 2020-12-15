import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import MemberMaster from "./components/pages/member/MemberMaster";
import MemberCreate from "./components/pages/member/MemberCreate";


export default function App() {



  return (
        <HashRouter>
          <Switch>
            <Route path="/membercreate">
              <MemberCreate />
            </Route>
            <Route path="/">
              <MemberMaster/>
            </Route>
          </Switch>
        </HashRouter>
  );
}


