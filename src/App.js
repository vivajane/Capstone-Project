// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import './App.css';
import Homepage from './homepage';
import Producepage from "./producePage"
import CommunityPage from './communityPage';
import AccountPage from './accountPage';
import RewardsPage from './rewardPage';
import SignIn from './signIn';
import SignUp from './signUp';
import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "signUp",
      element: <SignUp />,
    },
    {
      path: "signIn",
      element: <SignIn />,
    },
    {
      path: "produce",
      element: <Producepage />,
    },
  
    {
      path: "community",
      element: <CommunityPage />,
    },
    {
      path: "account",
      element: <AccountPage />,
    },
    {
      path: "reward",
      element: <RewardsPage />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
     
       
    </div>
  );
}

export default App;
