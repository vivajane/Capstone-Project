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
import Farmer from './signUp/registerfarmer';
import SignIn from './signIn';
import SignUp from './signUp';
import * as React from "react";
import ProduceEdit from "./producePage/produceditPage";
import ProduceEditSub from "./producePage/produceditsub";
import ProduceCart from './producePage/producecart';
import ProduceComponent from './producePage/producecomponent';
import ProduceOverview from './producePage/produceoverview';
import MyCart from './producePage/mycart';

import Consumer from './signUp/registerconsumer';
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
      element: <SignUp/>,
    },
    {
      path: "registerconsumer",
      element: <Consumer/>,
    },
    {
      path: "registerfarmer",
      element: <Farmer/>,
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
    {
      path: "produceditPage",
      element: <ProduceEdit />,
    },
    {
      path: "produceoverview",
      element: <ProduceOverview/>,
    },
    {
      path: "produceditsub",
      element: <ProduceEditSub />,
    },
    {
      path: "producecart",
      element: <ProduceCart />,
    },
    {
      path: "producecomponent",
      element: <ProduceComponent />,
    },
    {
      path: "mycart",
      element: <MyCart />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
     
       
    </div>
  );
}

export default App;
