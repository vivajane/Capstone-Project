// import logo from './logo.svg';
import './App.css';
import Homepage from './homepage';
import Producepage from './producePage';
import SignIn from './signIn';
import SignUp from './signUp';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
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
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
       {/* <SignIn/>
       <Homepage/>
       <SignUp/> */}
       
    </div>
  );
}

export default App;
