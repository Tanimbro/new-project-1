import './App.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import registration from './pages/registration/idex';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<registration/>}></Route>
  )
);


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/"
         element={<registration/>}/>
      </Route>
    )
  );
  return (
    <>
    <div>tanim</div>
      
    </>
  )
}

export default App
